var ServerActions = require('../actions/UserServerActions');

module.exports = {
	fetchCurrentUser: function(){
		$.ajax({
			url: '/api/session',
			method: 'get',
			dataType: 'json',
			success: function(data) {
				if (!data.errors) {
					// debugger;
					ServerActions.receiveCurrentUser(data);
				}
			},
		});
	},

	signup: function(data){
		$.ajax({
			url: "/api/user",
			method: "post",
			data: {user: data},
			dataType: 'json',
			success: function(data) {
				ServerActions.receiveCurrentUser(data);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	},

	login: function(data){
		$.ajax({
			url: "/api/session",
			method: "post",
			data: {user: data},
			dataType: 'json',
			success: function(data) {
				ServerActions.receiveCurrentUser(data);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	},

	logout: function(){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			dataType: 'json',
			success: function() {
				ServerActions.removeCurrentUser();
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	}
};
