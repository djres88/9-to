var React = require('react');
var ReservationForm = require('../Forms/ReservationForm');
var WorkspaceStore = require('../../stores/WorkspaceStore');
var ClientActions = require('../../actions/ClientActions');

var WorkspaceShow = React.createClass({
  getInitialState: function() {
    return {space: {}};
  },

  componentDidMount: function() {
    this.listener = WorkspaceStore.addListener(this._onChange);
    ClientActions.fetchSingleWorkspace(this.props.params.workspaceId);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({space: WorkspaceStore.find(parseInt(this.props.params.workspaceId))});
  },

  render: function() {
    var detail = this.state.space;
    
      // TODO: pass date props as default fields to ReservationForm
    return (
      <div className="listing-detail">
        <div className="listing-detail-above-fold">
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
            <ReservationForm workspace={detail}/>
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
