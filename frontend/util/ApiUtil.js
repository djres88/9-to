var ServerActions = require('../actions/ServerActions');

module.exports = {

	// WORKSPACE VIEWS (TENANT REQUESTS)
	fetchWorkspaces: function(searchParams) {
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
	// Backend retrieves the workspace's reservations along with the workspace itself..
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
	},

	// Need separate reservations query for this user's reservations. The use case here — the user's profile page — is distinct from looking at all reservations for a particular set of workspaces (to check availability).
	fetchUserReservations: function(userId) {
		$.ajax({
			url: 'api/user/',
			method: 'get',
			data: {user_id: userId},
			dataType: 'json',
			success: function(reservationDetails) {
				ServerActions.receiveReservations(reservationDetails);
			},
			error: function(data) {
				ServerActions.handleError(data);
			}
		});
	}
};
