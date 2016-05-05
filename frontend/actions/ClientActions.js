var ApiUtil = require('../util/ApiUtil');

module.exports = {
  // fetchWorkspaces:  function() {
  //   ApiUtil.fetchWorkspaces();
  // },
  //
  // fetchSingleWorkspace: function(id) {
  //   ApiUtil.fetchSingleWorkspace(id);
  // }

  //NOTE: fetch workspaces based on map bounds. Use the searchbox as a starting point for the map (i.e. translate the city input to map coordinates).
  fetchWorkspaces: function(bounds) {
    ApiUtil.fetchWorkspaces(bounds);
  },

  fetchSingleWorkspace: function(id) {
    ApiUtil.fetchSingleWorkspace(id);
  },

  reserveSpace: function(id, start, end) {
    debugger;
    ApiUtil.createReservation(id, start, end);
  }




  // WORKSPACE COMPLETE CRUD (HOST ACTIONS)
  // listWorkspace: function(workspace) {
  //   ApiUtil.listWorkspace(workpsace);
  // },
  //
  // editWorkspace: function(workspace) {
  //   ApiUtil.editWorkspace(workspace)
  // },
  //
  // removeWorkspace: function(id) {
  //   ApiUtil.removeWorkspace(id)
  // },

  // RESERVATION ACTIONS
  // createReservation: function(reservation) {
  //   ApiUtil.createReservation(reservation);
  // },
  //
  // changeReservation: function(reservation) {
  //   ApiUtil.updateReservation(reservation);
  // },
  //
  // cancelReservation: function(id) {
  //   ApiUtil.deleteReservation(id);
  // }
};
