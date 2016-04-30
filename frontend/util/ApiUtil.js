var ServerActions = require('../actions/ServerActions');

module.exports = {

	// WORKSPACE VIEWS (TENANT REQUESTS)
	fetchWorkspaces: function() {
		$.ajax({
			url: 'api/workspaces',
			method: 'get',
			dataType: 'json',
			success: function(workspacesData) {
				ServerActions.receiveWorkspaces(workspacesData);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	},

	fetchSingleWorkspace: function(id) {
		$.ajax({
			url: 'api/workspace' + id,
			method: 'get',
			dataType: 'json',
			success: function(workspaceDetails) {
				ServerActions.receiveWorkspaces(workspaceDetails);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	}


	// WORKSPACE CRUD (HOST REQUESTS)


	// RESERVATIONS

};
