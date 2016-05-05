var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var Dates = React.createClass({

  // getInitialState: function() {
  //   return {date: null };
  // },
  //
  // this.setState({
  //   date: date
  // });

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
