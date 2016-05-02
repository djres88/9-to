var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ReactDOM = require('react-dom');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, //San Francisco
  zoom: 13
};

var Map = React.createClass({
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.eachSpace(this.createMarker);
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
      if (!this.props.workspaces.hasOwnProperty(marker.workspaceId)){
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

  _handleClick: function(coords){
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
        northEast: northEast,
        southWest: southWest
      };
      // FilterActions.updateBounds(bounds);
    });
    google.maps.event.addListener(this.map, 'click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that._handleClick(coords);
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
      <div className="map-box">
        <div id="map" ref="map">Map</div>
       </div>
    );
  }
});

module.exports = Map;
