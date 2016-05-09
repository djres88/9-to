var React = require('react');
var HashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/ClientActions.js');

var SearchLocationsBar = require('./SearchLocationsBar');

var Search = React.createClass({
  getInitialState: function() {
    return { spacesNeeded: null, searchfield: "Search by location"};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var queryParams = {
      lat: window.autocomplete.getPlace().geometry.location.lat(),
      lng: window.autocomplete.getPlace().geometry.location.lng()
    };

    HashHistory.push({
      pathname: "s",
      query: queryParams
    });

  },

  dropdown: function( ) {
    this.setState({dropdown: "block"});
  },

  render: function() {
    var context = this;

    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <SearchLocationsBar location={this.props.location} className="searchbar-home" text={this.state.searchfield}/>
        <input className="search-button" type="submit" value="Search"/>
      </form>
    );
  }
});

module.exports = Search;
