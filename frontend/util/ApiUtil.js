var ServerActions = require('../actions/ServerActions');

module.exports = {

	// WORKSPACE VIEWS (TENANT REQUESTS)
	fetchWorkspaces: function(searchParams) {
		$.ajax({
			url: 'api/workspaces',
			method: 'get',
			data: {map_bounds: searchParams},
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
			url: 'api/workspaces/' + id,
			method: 'get',
			dataType: 'json',
			success: function(workspaceDetails) {
				ServerActions.receiveSingleWorkspace(workspaceDetails);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	}


	// WORKSPACE CRUD (HOST REQUESTS)


	// RESERVATIONS

};
