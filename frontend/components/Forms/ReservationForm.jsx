var React = require('react');
var PropTypes = React.PropTypes;
var Dates = require('../Search/Dates');
var WorkspaceStore = require('../../stores/WorkspaceStore');
var UserStore = require('../../stores/UserStore');
var FilterActions = require('../../actions/FilterActions');
var ClientActions = require('../../actions/ClientActions');

var ReservationForm = React.createClass({
  getInitialState: function() {
    return { workspace: "", beginDate: null, endDate: null };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(UserStore.currentUser());
    if (!UserStore.currentUser()) {
      alert("User must be logged in");
      // TODO: open the modal
    } else if (!this.state.beginDate || !this.state.endDate ) {
      alert("Please select a valid begin and end date.");
    } else {
      ClientActions.reserveSpace(this.state.workspace.id, this.state.beginDate, this.state.endDate);
    }
  },

  componentDidMount: function() {
    ClientActions.fetchSingleWorkspace(parseInt(this.props.workspaceId));
    this.setState({workspace: WorkspaceStore.find(parseInt(this.props.workspaceId))});
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
    this.workspace = WorkspaceStore.find(parseInt(this.props.workspaceId));
    return (
      <div>
        <form className="mini-reservation-form"
          onSubmit={this.handleSubmit}>
          <h1>$ {this.state.workspace.price_week} per week</h1>
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
