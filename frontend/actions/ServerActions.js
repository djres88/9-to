var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  receiveAll: function(workspaces){
    AppDispatcher.dispatch({
      actionType: "WORKSPACES_RECEIVED",
      workspaces: workspaces
    });
  },
  receiveSingleBench: function(workspace){
    AppDispatcher.dispatch({
      actionType: "WORKSPACES_RECEIVED",
      workspace: workspace
    });
  }
};
