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

  handleError: function(errors) {
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: errors
    });
  }
};
