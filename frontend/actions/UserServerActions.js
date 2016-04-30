var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
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
  }
};
