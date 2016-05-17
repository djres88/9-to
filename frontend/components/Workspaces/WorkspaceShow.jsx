var React = require('react');
var ReservationForm = require('../Forms/ReservationForm');
var WorkspaceStore = require('../../stores/WorkspaceStore');
var ReservationStore = require('../../stores/ReservationStore');
var ClientActions = require('../../actions/ClientActions');
var UserStore = require('../../stores/UserStore');

var Modal = require("react-modal");

var WorkspaceShow = React.createClass({
  getInitialState: function() {
    return {space: {}, modalOpen: false, user: UserStore.currentUser() };
  },


  componentDidMount: function() {
    ClientActions.fetchSingleWorkspace(this.props.params.workspaceId);
    this.listener = WorkspaceStore.addListener(this._onChange);
    this.userListener = UserStore.addListener(this._onLogin);
  },

  componentWillUnmount: function() {
    this.listener.remove();
    this.resListener.remove();
  },

  componentDidUpdate: function() {
    this.resListener = ReservationStore.addListener(this._onSuccessfulRes);
  },

  _onChange: function() {
    this.setState({space: WorkspaceStore.find(parseInt(this.props.params.workspaceId))});
  },

  _onSuccessfulRes: function() {
    this.reservations = ReservationStore.all();
    if (!this.reservations) {
      return;
    }
    var latest = Object.keys(this.reservations)[Object.keys(this.reservations).length-1];
    var formatStartDate = this.reservations[latest].start_date.slice(5);
    var formatEndDate = this.reservations[latest].end_date.slice(5);

    this.modalTextPart1 = "You're all set to work in " + this.state.space.city + "!";
    this.modalTextPart2 = "See you from " + formatStartDate + " — " + formatEndDate + ".";
    this.setState({reservations: ReservationStore.all()});
    this.setState({modalOpen: true});
  },

  _onLogin: function() {
    this.setState({user: UserStore.currentUser()});
  },

  closeModal: function(){
    this.setState({ modalOpen: false, formType: "login"});
  },

  render: function() {
    var style = {
		  overlay : {
		    position        : 'fixed',
		    top             : 0,
		    left            : 0,
		    right           : 0,
		    bottom          : 0,
		    backgroundColor : 'rgba(255, 255, 255, 0.5)',
				zIndex					: 10
		  },

		  content : {
		    position        : 'relative',
		    top             : '120px',
		    margin          : 'auto auto',
		    bottom          : '120px',
		    border          : '1px solid #ff5a5f',
				width						: '500px',
				// Whydis? TODO: see right margin
		    padding         : '25px 35px 25px 35px',
		    zIndex					: 11
		  }
		};


    var detail = this.state.space;
      // TODO: pass date props as default fields to ReservationForm
    return (
      <div className="listing-detail">
        <div className="listing-detail-above-fold">
          <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={style}>
            <h3>{this.modalTextPart1}</h3>
            <h3>{this.modalTextPart2}</h3>
          </Modal>
          <img src={detail.main_photo_url} alt="Main Photo"/>
        </div>
        <div className="highlights-bar">
          <div className="owner-pog"></div>
          <div className="highlights-description">
            <h3>{detail.description}</h3>
            <p>{detail.city}</p>
            <ul className="glyphs">
              <li>
                <h3>{detail.officetype}</h3>
                <p>Office Type</p>
              </li>
              <li>
                <h3>{detail.capacity}</h3>
                <p>Capacity</p>
              </li>
            </ul>

            <ReservationForm workspace={detail} location={this.props.location} reservations={this.reservations}/>

          </div>
        </div>
        <div className="details-box">
          <h3>About</h3>
          <p>{detail.description}</p>
          <p><a>Contact Host</a></p>
          <hr/>
          <h4>Details</h4>
          <ul className="details">
            <li>Hours: </li>
            <li>Property Type: </li>
            <li>{"Office Type:  " + detail.officetype}</li>
          </ul>
          <hr/>
          <h4>Amenities</h4>
          <ul className="amenities">
            <li>Coffee</li>
            <li>Conference Room</li>
            <li>WIFI</li>
            <li>Print/Ship Center</li>
            <li>Security</li>
            <li>Parking</li>
          </ul>
          <hr/>
          <h4>Prices</h4>
          <ul className="prices">
            <li>{"Weekly:  $" + detail.price_week}</li>
            <li>{"Monthly:  $" + detail.price_month}</li>
          </ul>
          <hr/>
          <div className="photos"> </div>
        </div>
      </div>
    );
  }

});

module.exports = WorkspaceShow;
