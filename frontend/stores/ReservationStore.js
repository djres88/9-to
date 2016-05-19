var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var ReservationStore = new Store(AppDispatcher);

var _reservations = {};

var _addReservation = function(res) {
  _reservations[res.id] = res;
};

var _deleteReservation = function(id) {
  delete _reservations[id];
};

// NB: Want all reservations for the workspace. Needed to check for availability (eventual feature).
ReservationStore.all = function() {
  var reservations = {};
  Object.keys(_reservations).forEach(function(key) {
    reservations[key] = _reservations[key];
  });
  return reservations;
};

// NB: Check whether the user has booked this workspace. Returns boolean.
ReservationStore.booked = function(id) {
  var reservation;
  var hasBooked = false;
  Object.keys(_reservations).forEach(function(res) {
    if (id === _reservations[res].workspace_id) {
      hasBooked = true;
    }
  });
  return hasBooked;
};

// NB: Get all reservations for this user. For "My Account" component.
ReservationStore.userReservationsAll = function(userId) {
  Object.keys(_reservations).forEach(function(res) {
    if (id === _reservations[res].workspace_id) {
      hasBooked = true;
    }
  });
};

// NB: Retrieve user's reservations for this workspace. Use for displaying modal on WorkspaceShow page.
ReservationStore.userReservationsSingleWorkspace = function(userId, workspaceId) {
  var userReservations = {};
  Object.keys(_reservations).forEach(function(res) {
    if (workspaceId === _reservations[res].workspace_id &&
        userId === _reservations[res].user_id
    ) {
      userReservations[_reservations[res].id] = _reservations[res];
    }
  });
  return userReservations;
};

ReservationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RESERVATION_CREATED":
      _addReservation(payload.reservation);
      ReservationStore.__emitChange();
      break;
    case "RESERVATION_DELETED":
      _deleteReservation(payload.id);
      ReservationStore.__emitChange();
      break;
    // case "WORKSPACE_RECEIVED":
    //   _reservations = {};
    //   payload.workspace.reservations.forEach(function(res) {
    //     _addReservation(res);
    //   });
    //   ReservationStore.__emitChange();
    //   break;
    // case "RESERVATIONS_FOUND":
    //   _reservations = {};
    //   payload.reservations.forEach(function(res) {
    //     _addReservation(res);
    //   });
    //   ReservationStore.__emitChange();
  }
};

module.exports = ReservationStore;
