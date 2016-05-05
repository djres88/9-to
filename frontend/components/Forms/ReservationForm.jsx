var React = require('react');
var PropTypes = React.PropTypes;
var Dates = require('../Search/Dates');
var WorkspaceStore = require('../../stores/WorkspaceStore');
var UserStore = require('../../stores/UserStore');
var FilterActions = require('../../actions/FilterActions');
var ClientActions = require('../../actions/ClientActions');

var ReservationForm = React.createClass({
  getInitialState: function() {
    return { beginDate: null, endDate: null };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var userId = UserStore.currentUser();
    if (!userId) {
      alert("User must be logged in");
      // TODO: open the modal
    } else if (!this.state.beginDate || !this.state.endDate ) {
      alert("Please select a valid begin and end date.");
    } else {
      ClientActions.reserveSpace({
        workspaceId: this.props.workspace.id,
        tenantId: userId,
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
              <Dates action={this.updateBeginDate} date={this.state.beginDate}/>
            </div>
            <div className="reservation-form-dates">
              <p>End Date</p>
              <Dates action={this.updateEndDate} date={this.state.endDate}/>
            </div>
          </div>
          <button type="submit" className="search-button">Request to Book</button>
        </form>
      </div>
    );
  }

});

module.exports = ReservationForm;
