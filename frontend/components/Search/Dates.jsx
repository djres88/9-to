var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
var FilterActions = require('../../actions/FilterActions');

var Dates = React.createClass({

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
