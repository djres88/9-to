var React = require('react');
var HashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/ClientActions.js');

var Search = React.createClass({
  handleSubmit: function() {
    // ClientActions.search...
    HashHistory.push("s");
  },

  render: function() {
    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <input className="search-field" type="text"/>
        <input className="date-dropdown" type="text"/>
        <input className="date-dropdown" type="text"/>
        <input className="capacity-dropdown" type="text"/>
        <input className="search-button" type="submit" value="Search"/>
      </form>
    );
  }
});

module.exports = Search;
