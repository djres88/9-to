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
  },
  receiveCurrentUser: function(user){
		AppDispatcher.dispatch({
			actionType: "LOGIN",
			user: user
		});
	},
  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: "LOGOUT",
    });
  },

  handleError: function(errors) {
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: errors
    });
  },
};
