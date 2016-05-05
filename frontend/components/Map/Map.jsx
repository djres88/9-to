var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ReactDOM = require('react-dom');
var ClientActions = require('../../actions/ClientActions');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var Map = React.createClass({

  mapOptions: function() {
    return {
      // TODO: Set lat & lng to this.props.params, as lat and lng are in the query string; but this.props.params is undefined.
      center: {lat: this.props.lat, lng: this.props.lng}, //San Francisco
      zoom: 13
    };
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, this.mapOptions());
    // window.autocomplete.bindTo('bounds', this.map);
    this.registerListeners();
    this.markers = [];
    this.eachSpace(this.createMarker);
    var that = this;
    setTimeout(function() {
      window.autocomplete.addListener('place_changed', function() {
        var place = window.autocomplete.getPlace().geometry.location;
        that.map.setCenter(place);
        that.map.setZoom(11);
        that._handleChange({lat: place.lat(), lng: place.lng()});
      });
    }, 500);
  },

  eachSpace: function(callback){
    var spaces = this.props.spaces;
    var keys = Object.keys(spaces);
    keys.forEach(function(key){
      callback(spaces[key]);
    });
  },

  componentDidUpdate: function () {
    this._onChange();
  },

  _onChange: function(){
    var newWorkspaces = [];
    var removeMarkers = [];
    //Collect markers to remove
    this.markers.forEach(function(marker){
      if (!this.props.spaces.hasOwnProperty(marker.workspaceId)){
        removeMarkers.push(marker);
      }
    }.bind(this));

    //Collect spaces to add
    var currentWorkspaces = this.markers.map(function(marker){
      return marker.workspaceId;
    });

    this.eachSpace(function(space){
      if (!currentWorkspaces.includes(space.id)){
        newWorkspaces.push(space);
      }
    });
    //Do the adding / removing
    newWorkspaces.forEach(this.createMarker);
    removeMarkers.forEach(this.removeMarker);
  },

  _handleChange: function(coords){
    HashHistory.push({
      pathname: "s/",
      query: coords
    });
  },

  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      bounds = {
        NE: northEast,
        SW: southWest
      };
      ClientActions.fetchWorkspaces({map_bounds: bounds});
      var coords = { lat: that.map.center.lat(), lng: that.map.center.lng() };
      that._handleChange(coords);
    });
    google.maps.event.addListener(this.map, 'click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that._handleChange(coords);
    });
  },

  createMarker: function (workspace) {
    var pos = new google.maps.LatLng(workspace.latitude, workspace.longitude);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      workspaceId: workspace.id
    });

    marker.addListener('click', function () {
      HashHistory.push("workspaces/" + workspace.id );
    });
    this.markers.push(marker);
  },
  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].workspaceId === marker.workspaceId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },

  render: function(){
    return (
      <div theMap={this.map} className="map-box">
        <div id="map" ref="map"></div>
       </div>
    );
  }
});

module.exports = Map;
