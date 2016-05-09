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
      center: {lat: this.props.lat, lng: this.props.lng}, //San Francisco
      zoom: 11
    };
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, this.mapOptions());
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

    this.filterListener = FilterStore.addListener(this.updateBounds);
  },

  componentWillUnmount: function() {
    this.filterListener.remove();
    this.idleListener.remove();
    this.clickListener.remove();
    // this.markerListener.remove();
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

  updateBounds: function() {
    var bounds = this.map.getBounds();
    var northEast = _getCoordsObj(bounds.getNorthEast());
    var southWest = _getCoordsObj(bounds.getSouthWest());
    //actually issue the request
    bounds = {
      NE: northEast,
      SW: southWest
    };
    params = FilterStore.params();
    params.map_bounds = bounds;

    ClientActions.fetchWorkspaces(params);
    var coords = { lat: this.map.center.lat(), lng: this.map.center.lng() };
    this._handleChange(coords);
  },

  registerListeners: function(){
    var that = this;
    this.idleListener = google.maps.event.addListener(this.map, 'idle', this.updateBounds);
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
      // NB: Start fetching the workspace's reservations as quickly as possible before the show page loads.
      ClientActions.fetchReservations(
        this.workspaceId
      );
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
