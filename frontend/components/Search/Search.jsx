var React = require('react');
var HashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/ClientActions.js');

var Dates = require('./Dates');
var SearchLocationsBar = require('./SearchLocationsBar');

var Search = React.createClass({
  getInitialState: function() {
    return { spacesNeeded: null, coords: null};
  },

  // getStartDate: function(e) {
  //   e.preventDefault();
  //   // console.log(e.currentTarget);
  // },
  //
  // getEndDate: function(e) {
  //   e.preventDefault();
  // },
  //
  // getCapacity: function(e) {
  //   e.preventDefault();
  //   // console.log(e.currentTarget);
  // },
  //

  handleSubmit: function(event) {
    event.preventDefault();
    var coords = {
      lat: window.autocomplete.getPlace().geometry.location.lat(),
      lng: window.autocomplete.getPlace().geometry.location.lng()
    };

    this.setState({coords: coords});
    // ClientActions.fetchWorkspaces({
    //   coords: coords, == NOTE: Let map take care of the coordinates.
    //   // startDate: this.state.startDate,
    //   // endDate: this.state.endDate,
    //   // spacesNeeded: this.state.spacesNeeded,
    // });
    HashHistory.push({
      pathname: "s",
      query: coords
    });

  },

  dropdown: function( ) {
    this.setState({dropdown: "block"});
  },

  render: function() {
    var context = this;
    // <Dates onClick={this.getStartDate} placeholder="Start Date" dates={this.state.startDate}/>
    // <Dates onClick={this.getEndDate} placeholder="End Date" dates={this.state.endDate}/>
    // <select className="capacity-dropdown">
    //   <option onChange={this.getCapacity}>Spaces Needed: 1</option>
    //   <option onChange={this.getCapacity}>Spaces Needed: 2</option>
    //   <option onChange={this.getCapacity}>Spaces Needed: 3</option>
    //   <option onChange={this.getCapacity}>Spaces Needed: 4</option>
    //   <option onChange={this.getCapacity}>Spaces Needed: 5+</option>
    // </select>
    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <SearchLocationsBar location={this.props.location} className="searchbar-home"/>
        <input className="search-button" type="submit" value="Search"/>
      </form>
    );
  }
});

module.exports = Search;
