var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var Dates = React.createClass({

  getInitialState: function() {
    return {date: null };
  },

  handleChange: function(date) {
    this.setState({
      date: date
    });
  },

  render: function() {
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        className="date-dropdown"
        placeholderText={this.props.placeholder}
      />
    );
  }

});

module.exports = Dates;
