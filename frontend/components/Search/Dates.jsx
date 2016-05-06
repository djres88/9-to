var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
var FilterActions = require('../../actions/FilterActions');

var Dates = React.createClass({
  // getInitialState: function() {
  //   return {beginDate: null, endDate: null};
  // },
  //
  // updateBeginDate: function(date) {
  //   end = this.state.endDate;
  //   if (end && date._d > end._d) {
  //     alert("End date cannot occur before start date.");
  //   } else {
  //     this.setState({
  //       beginDate: date
  //     });
  //
  //     var endQuery;
  //     if (this.state.startDate) {
  //       endQuery = this.state.startDate.format("MM/DD/YYYY");
  //     } else {
  //       endQuery = "";
  //     }
  //   }
  // },
  //
  // updateEndDate: function(date) {
  //   begin = this.state.beginDate;
  //   if (begin && date._d < begin._d) {
  //     alert("End date cannot occur before start date.");
  //   } else {
  //     this.setState({
  //       endDate: date
  //     });
  //     var beginQuery;
  //     if (this.state.beginDate) {
  //       beginQuery = this.state.beginDate.format("MM/DD/YYYY");
  //     } else {
  //       beginQuery = "";
  //     }
  //   }
  // },

  render: function() {
    return (
      <DatePicker
        selected={this.props.date}
        onChange={this.props.action}
        className="date-dropdown"
        placeholderText={this.props.placeholder}
      />
    );
  }

});

module.exports = Dates;
