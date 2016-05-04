var React = require('react');
var HashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/ClientActions.js');

var Dates = require('./Dates');
var SearchLocationsBar = require('./SearchLocationsBar');

var Search = React.createClass({
  getInitialState: function() {
    return { inputVal: "", matchingCities: [], startDate: null, endDate: null, spacesNeeded: null};
  },

  // componentDidMount: function() {
  //   // Better to just have a table w/ all the cities (matched to their main coordinates) and load that up?
  //   this.listener = WorkspaceStore.addListener(this._onChange);
  //
  // },

  getCity: function(event) {
    event.preventDefault();
    this.setState({
      inputVal: event.currentTarget.value,
      // matchingCities: ClientActions.matchCities(e.currentTarget.value)
      matchingCities: ["test1", "test2"]
    });
  },

  getStartDate: function(e) {
    e.preventDefault();
    console.log(e.currentTarget);
  },

  getEndDate: function(e) {
    e.preventDefault();
  },

  getCapacity: function(e) {
    e.preventDefault();
    console.log(e.currentTarget);
  },

  updateSearchField: function(e) {
    console.log(e.currentTarget.innerHTML);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    ClientActions.fetchWorkspaces({
      city: this.state.inputVal,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      spacesNeeded: this.state.spacesNeeded,
    });
    HashHistory.push("s");
  },

  dropdown: function( ) {
    this.setState({dropdown: "block"});
  },

  render: function() {
    var context = this;
    var LocationMatches = this.state.matchingCities.map(function(city, idx) {
      return <li key={idx} onClick={context.updateSearchField} className="city-matches">{city}</li>;
    });
    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <div className="searchbar">
          <input id="search-field-text" placeholder="Location" className="search-field" type="text" value={this.state.inputVal} onChange={this.getCity}/>
          <ul display="none">
            {LocationMatches}
          </ul>
        </div>
        <SearchLocationsBar value={this.state.inputVal} action={this.getCity}/>
        <Dates onClick={this.getStartDate} placeholder="Start Date"/>
        <Dates onClick={this.getEndDate} placeholder="End Date"/>
        <select className="capacity-dropdown">
          <option onChange={this.getCapacity}>Spaces Needed: 1</option>
          <option onChange={this.getCapacity}>Spaces Needed: 2</option>
          <option onChange={this.getCapacity}>Spaces Needed: 3</option>
          <option onChange={this.getCapacity}>Spaces Needed: 4</option>
          <option onChange={this.getCapacity}>Spaces Needed: 5+</option>
        </select>
        <input className="search-button" type="submit" value="Search"/>
      </form>
    );
  }
});

module.exports = Search;
