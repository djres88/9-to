var React = require('react');
var HashHistory = require('react-router').hashHistory;

var SearchLocationsBar = React.createClass({
  getInitialState: function() {
    return {text: "Search by location"};
  },

  componentDidMount: function() {
    var input = document.getElementById('searchTextField');
      window.autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});
    document.getElementById('searchTextField').addEventListener(
      'submit', this.handleSubmit);
  },

  handleSubmit: function() {
    var coords = {
      lat: window.autocomplete.getPlace().geometry.location.lat(),
      lng: window.autocomplete.getPlace().geometry.location.lng()
    };

    HashHistory.push({
      pathname: "s",
      query: coords
    });
  },

  render: function() {
    return (
      <input id="searchTextField" className={this.props.className} placeholder={this.state.text}/>
    );
  }

});

module.exports = SearchLocationsBar;
