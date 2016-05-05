var React = require('react');
var HashHistory = require('react-router').hashHistory;

// TODO: Make this a place autocomplete w/ Google API. All the search bar needs to do is set the coordinates of the Map! https://developers.google.com/places/javascript/

var SearchLocationsBar = React.createClass({

  componentDidMount: function() {

    var input = document.getElementById('searchTextField');
      window.autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});
    // }
    document.getElementById('searchTextField').addEventListener(
      'submit', this.handleChange);
  },

  showText: function() {
    if (window.autocomplete && window.autocomplete.getPlace()) {
      return window.autocomplete.getPlace().formatted_address;
    } else {
      return "Search by Location";
    }
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
      <input id="searchTextField" className={this.props.className} placeholder={this.showText()}/>
    );
  }

});

module.exports = SearchLocationsBar;
