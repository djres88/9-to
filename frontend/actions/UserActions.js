var UserApiUtil = require('../util/UserApiUtil');
var UserStore = require('../stores/UserStore');
var AppDispatcher = require('../dispatcher/Dispatcher');

var UserActions = {
	fetchCurrentUser: function() {
		UserApiUtil.fetchCurrentUser();
	},

	signup: function(user){
		UserApiUtil.signup(data);
	},

	login: function(user){
		UserApiUtil.login(user);
	},

	guestLogin: function(){
		UserApiUtil.login({username: "guest", password: "guestlogin"});
	},

	logout: function(){
		UserApiUtil.logout();
	}
};

module.exports = UserActions;
