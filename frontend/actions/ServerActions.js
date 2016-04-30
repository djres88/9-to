var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  receiveAll: function(workspaces){
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
  }
};
