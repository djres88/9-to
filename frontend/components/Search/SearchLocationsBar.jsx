var React = require('react');

// TODO: Make this a place autocomplete w/ Google API. All the search bar needs to do is set the coordinates of the Map! https://developers.google.com/places/javascript/


var SearchLocationsBar = React.createClass({
  // getInitialState: function() {
  //   return {coord: {lat: }}
  // },

  componentDidMount: function() {
    // var defaultBounds = new google.maps.LatLngBounds(
    // new google.maps.LatLng(-33.8902, 151.1759),
    // new google.maps.LatLng(-33.8474, 151.2631));


    var input = document.getElementById('searchTextField');
    autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});
    console.log(window);
    // autocomplete.bindTo('bounds', window.GlobalMap);
  },

  render: function() {
    return (
      <input id="searchTextField" className={this.props.className}/>
    );
  }

});

module.exports = SearchLocationsBar;

// render: function() {
//   return (
//     <div className="searchbar">
//       <input id="search-field-text" placeholder="Location" className="search-field" type="text" value={this.props.value} onChange={this.props.action}/>
//       <ul display="none">
//         {LocationMatches}
//       </ul>
//     </div>
//   );
// }
