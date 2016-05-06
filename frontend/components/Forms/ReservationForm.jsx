var React = require('react');
var PropTypes = React.PropTypes;
var Dates = require('../Search/Dates');
var WorkspaceStore = require('../../stores/WorkspaceStore');
var UserStore = require('../../stores/UserStore');
var FilterActions = require('../../actions/FilterActions');
var ClientActions = require('../../actions/ClientActions');
var ReservationStore = require('../../stores/ReservationStore');
var moment = require('moment');

var ReservationForm = React.createClass({
  getInitialState: function() {
    return { beginDate: window.beginDate, endDate: window.endDate, buttonText: "Reserve This Space" };

  },

  componentDidMount: function() {
    var user = UserStore.currentUser();
    if (user) {
      // ClientActions.fetchMyReservations(UserStore.currentUser().id);
    }

    this.listener = ReservationStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({booked: ReservationStore.booked(this.props.workspace.id)});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = UserStore.currentUser();
    if (!user) {
      alert("User must be logged in");
      // TODO: open the modal
    } else if (!this.state.beginDate || !this.state.endDate ) {
      alert("Please select a valid begin and end date.");
    } else {

      ClientActions.reserveSpace({
        workspace_id: this.props.workspace.id,
        user_id: user.id,
        start_date: this.state.beginDate,
        end_date: this.state.endDate
      });

      this.setState({buttonText: "Booked!"});
    }
  },

  updateBeginDate: function(date) {
    end = this.state.endDate;
    if (end && date._d > end._d) {
      alert("End date cannot occur before start date.");
    } else {
      FilterActions.updateBeginDate(date);
      this.setState({
        beginDate: date
      });
    }
  },

  updateEndDate: function(date) {
    begin = this.state.beginDate;
    if (begin && date._d < begin._d) {
      alert("End date cannot occur before start date.");
    } else {
      FilterActions.updateEndDate(date);
      this.setState({
        endDate: date
      });
    }
  },

  buttonBackground: function() {
    if (this.state.buttonText == "Booked!") {
      return "booked";
    } else {
      return "Reserve this Space";
    }
  },

  render: function() {
    return (
      <div>
        <form className="mini-reservation-form"
          onSubmit={this.handleSubmit}>
          <h1>$ {this.props.workspace.price_week} per week</h1>
          <div>
            <div className="reservation-form-dates">
              <p>Start Date</p>
              <Dates action={this.updateBeginDate} date={this.state.beginDate}
                placeholder="mm/dd/yyyy"/>
            </div>
            <div className="reservation-form-dates">
              <p>End Date</p>
              <Dates action={this.updateEndDate} date={this.state.endDate} placeholder="mm/dd/yyyy"/>
            </div>
          </div>
          <button type="submit" className={"search-button " + this.buttonBackground()} >{this.state.buttonText}</button>
        </form>
      </div>
    );
  }

});

module.exports = ReservationForm;
