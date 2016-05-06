var ServerActions = require('../actions/ServerActions');

module.exports = {

	// WORKSPACE VIEWS (TENANT REQUESTS)
	fetchWorkspaces: function(searchParams) {
		console.log(searchParams);
		$.ajax({
			url: 'api/workspaces',
			method: 'get',
			data: searchParams,
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
	},


	// WORKSPACE CRUD (HOST REQUESTS)


	// RESERVATIONS
	createReservation: function(options) {
		$.ajax({
			url: 'api/workspaces/' + options.workspaceId + "/reservations",
			method: 'post',
			data: { reservation: options },
			dataType: 'json',
			success: function(reservationDetails) {
				ServerActions.receiveReservation(reservationDetails);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	}
};
