var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
var FilterActions = require('../../actions/FilterActions');

var Dates = React.createClass({
  // getInitialState: function() {
  //   return { date: moment() };
  // },
  //
  // componentWillReceiveProps: function() {
  //   this.setState({ date: this.props.date });
  // },

  render: function() {
      //
      // if (this.props.date) {
      //   return this.props.date;
      // } else {
      //   return moment();
      // }
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
