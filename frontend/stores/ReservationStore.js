var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var ReservationStore = new Store(AppDispatcher);

var _spaceReservations = {};
var _userReservations = {};

var _addSpaceReservation = function(res) {
  _spaceReservations[res.id] = res;
};

var _deleteSpaceReservation = function(id) {
  delete _spaceReservations[id];
};

var _addUserReservation = function(res) {
  _userReservations[res.id] = res;
};

// NB: Want all reservations for the workspace. Needed to check for availability (eventual feature). Better to keep the user's reservations stored separately, too, in case they revisit their account; but that's an optimization for later.
ReservationStore.all = function() {
  var reservations = {};
  Object.keys(_spaceReservations).forEach(function(key) {
    reservations[key] = _spaceReservations[key];
  });
  return reservations;
};

// NB: Check whether the user has booked this workspace. Returns boolean.
ReservationStore.booked = function(id) {
  var reservation;
  var hasBooked = false;
  Object.keys(_spaceReservations).forEach(function(res) {
    if (id === _spaceReservations[res].workspace_id) {
      hasBooked = true;
    }
  });
  return hasBooked;
};

// NB: Get all reservations for this user. For "My Account" component.
ReservationStore.userReservations = function(userId) {
  var reservations = [];

  return reservations;
};

// NB: Retrieve user's reservations for this workspace. Use for displaying modal on WorkspaceShow page.
ReservationStore.userReservationsSingleWorkspace = function(userId, workspaceId) {
  var userReservations = {};
  Object.keys(_spaceReservations).forEach(function(res) {
    if (workspaceId === _spaceReservations[res].workspace_id &&
        userId === _spaceReservations[res].user_id
    ) {
      userReservations[_spaceReservations[res].id] = _spaceReservations[res];
    }
  });
  return userReservations;
};

ReservationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RESERVATION_CREATED":
      _addSpaceReservation(payload.reservation);
      ReservationStore.__emitChange();
      break;
    case "RESERVATION_DELETED":
      _deleteSpaceReservation(payload.id);
      ReservationStore.__emitChange();
      break;
    case "WORKSPACE_RECEIVED":
      _spaceReservations = {};
      payload.workspace.reservations.forEach(function(res) {
        _addSpaceReservation(res);
      });
      ReservationStore.__emitChange();
      break;
    case "RESERVATIONS_FOUND":
      _userReservations = {};
      payload.reservations.forEach(function(res) {
        _addUserReservation(res);
      });
      ReservationStore.__emitChange();
  }
};

module.exports = ReservationStore;
