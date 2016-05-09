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
  receiveWorkspaceReservations: function(reservations) {
    AppDispatcher.dispatch({
      actionType: "RESERVATIONS_FOUND",
      reservations: reservations
    });
  },

  handleError: function(errors) {
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: errors
    });
  }
};
