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

  reserveSpace: function(options) {
    options.start_date = options.start_date.format("YYYY-MM-DD");
    options.end_date = options.end_date.format("YYYY-MM-DD");
    ApiUtil.createReservation(options);
  },

  fetchMyReservations: function(userId) {
    ApiUtil.fetchMyReservations(userId);
  },


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
