var UserApiUtil = require('../util/UserApiUtil');
var UserStore = require('../stores/UserStore');
var AppDispatcher = require('../dispatcher/Dispatcher');

var UserActions = {
	fetchCurrentUser: function(){
		UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
	},
	signup: function(user){
		UserApiUtil.post({
			url: "/api/user",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	login: function(user){
		UserApiUtil.post({
			url: "/api/session",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	guestLogin: function(){
		UserActions.login({username: "guest", password: "password"});
	},
	receiveCurrentUser: function(user){
		AppDispatcher.dispatch({
			actionType: "LOGIN",
			user: user
		});
	},
	handleError: function(error) {
		AppDispatcher.dispatch({
			actionType: "ERROR",
			errors: error
		});
	},
	removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: "LOGOUT",
		});
	},
	logout: function(){
		UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
	}
};

module.exports = UserActions;
