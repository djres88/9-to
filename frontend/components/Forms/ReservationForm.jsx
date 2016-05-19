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
    return { beginDate: moment(), endDate: moment(), formatSubmit: ["open", "Reserve This Space"] };
  },

  componentDidMount: function() {
    if (this.userHasBooked()) {
      this.disableForm();
    } else {
      this.enableForm();
    }
  },

  componentWillReceiveProps: function(props) {
    this.setState({reservations: this.props.reservations});

    if (this.userHasBooked()) {
      this.disableForm();
    } else {
      this.enableForm();
    }
  },

  _onChange: function() {
    if (this.userHasBooked()) {
      this.disableForm();
    } else {
      this.enableForm();
    }
  },

  userHasBooked: function() {
    return (ReservationStore.booked(this.props.workspace.id) && UserStore.currentUser());
  },

  enableForm: function() {
    this.setState({formatSubmit: ["open", "Reserve This Space"]});
    document.getElementById("reservation-submit-button").disabled = false;
  },

  disableForm: function() {
    this.setState({formatSubmit: ["booked", "Booked!"]});
    document.getElementById("reservation-submit-button").disabled = true;
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
        workspace_id: this.props.workspace.id,
        user_id: user.id,
        start_date: this.state.beginDate,
        end_date: this.state.endDate
      });

    }
  },

  updateBeginDate: function(date) {
    end = this.state.endDate;
    if (end && date._d > end._d) {
      alert("End date cannot occur before start date.");
    } else {
      // NB: No longer filtering on reservations page, so... comment out: FilterActions.updateBeginDate(date);
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
      // NB: No longer filtering on reservations page, so... comment out:
      // FilterActions.updateEndDate(date);
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
          <button id="reservation-submit-button" type="submit" className={ "search-button-" + this.state.formatSubmit[0] } >{this.state.formatSubmit[1]}</button>
        </form>
      </div>
    );
  }

});

module.exports = ReservationForm;
