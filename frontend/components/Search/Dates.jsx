var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var Dates = React.createClass({

  getInitialState: function() {
    return {date: moment() };
  },

  handleChange: function(date) {
    console.log(this.state);
    this.setState({
      date: date
    });
    console.log(this.state);
  },

  render: function() {
    console.log(this.props);
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        className="date-dropdown"
      />
    );
  }

});

module.exports = Dates;
