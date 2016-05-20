var React = require('react');
var HashHistory = require('react-router').hashHistory;

var SearchLocationsBar = React.createClass({
  getInitialState: function() {
    return {text: "Search by location"};
  },

  componentDidMount: function() {
    var input = document.getElementById('searchTextField');
    window.autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});

    var that = this;
    document.getElementById('searchTextField').addEventListener(
      'keypress', function(e) {
        if (e.charCode === 13) {
          that.handleSubmit();
        }
      });
  },

  handleSubmit: function() {
    //check valid location
    if (!window.autocomplete.getPlace()) {
      return;
    }
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
