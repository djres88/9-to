var ApiUtil = require('../util/ApiUtil');

module.exports = {
  // fetchWorkspaces:  function() {
  //   ApiUtil.fetchWorkspaces();
  // },
  //
  // fetchSingleWorkspace: function(id) {
  //   ApiUtil.fetchSingleWorkspace(id);
  // }

  fetchWorkspaces: function(params) {
    ApiUtil.fetchWorkspaces(params);
  },

  fetchSingleWorkspace: function(id) {
    ApiUtil.fetchSingleWorkspace(id);
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
