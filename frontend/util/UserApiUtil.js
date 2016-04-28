var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
	post: function(options){
		$.ajax({
			url: options.url,
			type: "post",
			data: {user: options.user},
			success: options.success,
			error: options.error
		});
	},

	logout: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: success,
			error: error
		});
	},

	fetchCurrentUser: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'get',
			success: function(obj) {
				if (obj.errors) {
					error(obj);
				} else {
					success(obj);
				}
			},
		});
	}
};
