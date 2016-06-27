var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ReactDOM = require('react-dom');
var ClientActions = require('../../actions/ClientActions');
var FilterStore = require('../../stores/FilterStore');
var WorkspaceStore = require('../../stores/WorkspaceStore');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var Map = React.createClass({

  mapOptions: function() {
    return {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 12
    };
  },

  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, this.mapOptions());
    this.markers = [];
    this.registerListeners();
    var that = this;
    // NOTE: The map element has mounted on the DOM, but the Google Map API has not yet created a Map object for the Autocomplete (search bar) to listen to. In order to avoid an error (that.map is undefined), I'll wait a tick to add the listener. Not sure if setTimeout is the best way to solve this problem (or any problem, for that matter), but it's one solution.

    setTimeout(function() {
      window.autocomplete.addListener('place_changed', function() {
        var place = window.autocomplete.getPlace().geometry.location;
        that.map.setCenter(place);
        that.map.setZoom(12);
      });
    }, 100);

    // NOTE: (discussion point for iviews? tough bug). We normally use the map object's bounds to fetch the right workspaces, but — per the note above — the map has not yet been created. And yet in this case we don't want to wait to fetch the workspaces. Solution: I'm going to use the location query params for the initial ClientActions call, and use the Map bounds (once the map is loaded) for each subsequent call. The initial zoom of the map will always be the same, so I can grab the lat/lng of the NE/SW corners by factoring in the map's height/width in degrees.
    var params = FilterStore.params();
    var bounds = {
      SW: {lat: this.props.lat - 0.097245, lng: this.props.lng - 0.054932},
      NE: {lat: this.props.lat + 0.097245, lng: this.props.lng + 0.054932}
    };
    params.map_bounds = bounds;

    // Fetch workspaces based on the map's current bounds.
    ClientActions.fetchWorkspaces(params);

    // Prevent the initial re-rendering if browser window resizes on load.
    this.idleListenerWasSet = false;

    this.filterListener = FilterStore.addListener(this.updateBounds);
  },

  componentWillUnmount: function() {
    this.filterListener.remove();
    this.idleListener.remove();
    this.markerListener.remove();
  },

  componentDidUpdate: function() {
    this.updateMarkers();
  },

  eachSpace: function(callback) {
    var spaces = this.props.spaces;
    var keys = Object.keys(spaces);
    keys.forEach(function(key){
      callback(spaces[key]);
    });
  },

  updateMarkers: function() {
    var newWorkspaces = [];
    var removeMarkers = [];

    this.markers.forEach(function(marker){
      if (!this.props.spaces.hasOwnProperty(marker.workspaceId)){
        removeMarkers.push(marker);
      }
    }.bind(this));

    var currentWorkspaces = {};
    this.markers.forEach(function(marker){
      currentWorkspaces[marker.workspaceId] = true;
    });

    if (Object.keys(currentWorkspaces).length > 0) {
      this.eachSpace(function(space){
        if (!currentWorkspaces[space.id]) {
          newWorkspaces.push(space);
        }
      });
    } else {
      this.eachSpace(function(space){
        newWorkspaces.push(space);
      });
    }

    newWorkspaces.forEach(this.createMarker);
    removeMarkers.forEach(this.removeMarker);
  },

  _handleChange: function(coords){
    HashHistory.push({
      pathname: "s/",
      query: coords
    });
  },

  updateBounds: function() {
    // Prevent listener from running the first time.
    if (!this.idleListenerWasSet) {
      this.idleListenerWasSet = true;
      return;
    }
    var bounds = this.map.getBounds();
    var northEast = _getCoordsObj(bounds.getNorthEast());
    var southWest = _getCoordsObj(bounds.getSouthWest());
    bounds = {
      NE: northEast,
      SW: southWest
    };
    var params = FilterStore.params();
    params.map_bounds = bounds;

    ClientActions.fetchWorkspaces(params);

    var coords = { lat: this.map.center.lat(), lng: this.map.center.lng() };
    this._handleChange(coords);
  },

  registerListeners: function(){
    this.idleListener = google.maps.event.addListener(this.map, 'idle', this.updateBounds);

    var that = this;
    this.clickListener = google.maps.event.addListener(this.map, 'click', function(event) {
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

    this.markerListener = marker.addListener('click', function () {
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
