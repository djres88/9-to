var UserApiUtil = require('../util/UserApiUtil');

var UserActions = {
	fetchCurrentUser: function() {
		UserApiUtil.fetchCurrentUser();
	},

	signup: function(user){
		UserApiUtil.signup(user);
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
