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
    return { beginDate: moment(), endDate: moment(), buttonText: "" };

  },
  componentWillMount: function() {
    this.user = UserStore.currentUser();
    // if (this.user) {
    //   ClientActions.fetchReservations({
    //     user_id: this.user.id,
    //     workspace_id: this.props.location.pathname.split("/")[1]
    //   });
    // }
  },

  componentDidMount: function() {
    if (ReservationStore.booked(this.props.workspace.id)) {
      this.setState({buttonText: "Booked!"});
    } else {
      this.setState({buttonText: "Reserve This Space"});
    }

    this.listener = ReservationStore.addListener(this._onChange);
  },


  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    if (ReservationStore.booked(this.props.workspace.id)) {
      document.getElementById("reservation-submit-button").disabled = true;
      this.setState({buttonText: "Booked!"});
    } else {
      document.getElementById("reservation-submit-button").disabled = false;
      this.setState({buttonText: "Reserve This Space"});
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = UserStore.currentUser();
    if (!user) {
      alert("User must be logged in");
      return;
    } else if (!this.state.beginDate || !this.state.endDate ) {
      alert("Please select a valid begin and end date.");
      return;
    } else {
      ClientActions.reserveSpace({
        workspace_id: this.props.location.pathname.split("/")[1],
        user_id: user.id,
        start_date: this.state.beginDate,
        end_date: this.state.endDate
      });

      document.getElementById("reservation-submit-button").disabled = true;
      this.setState({beginDate: moment(), endDate: moment()});
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
          <button id="reservation-submit-button" type="submit" className={"search-button"} >{this.state.buttonText}</button>
        </form>
      </div>
    );
  }

});

module.exports = ReservationForm;
