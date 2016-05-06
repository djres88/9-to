var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  receiveWorkspaces: function(workspaces){
    AppDispatcher.dispatch({
      actionType: "WORKSPACES_RECEIVED",
      workspaces: workspaces
    });
  },

  receiveSingleWorkspace: function(workspace){
    AppDispatcher.dispatch({
      actionType: "WORKSPACE_RECEIVED",
      workspace: workspace
    });
  },

  receiveReservation: function(reservation) {
    AppDispatcher.dispatch({
      actionType: "RESERVATION_CREATED",
      reservation: reservation
    });
  },
  //
  // receiveSingleReservation: function(reservation) {
  //   debugger;
  //   AppDispatcher.dispatch({
  //     actionType: "RESERVATION_FOUND",
  //     reservation: reservation
  //   });
  // },

  handleError: function(errors) {
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: errors
    });
  }
};
