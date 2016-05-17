var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var ReservationStore = new Store(AppDispatcher);

var _reservations = {};
var _latestReservation;

var _addReservation = function(res) {
  _reservations[res.id] = res;
};

var _deleteReservation = function(id) {
  delete _reservations[id];
};

ReservationStore.all = function() {
  var reservations = {};
  Object.keys(_reservations).forEach(function(key) {
    reservations[key] = _reservations[key];
  });
  return reservations;
};

ReservationStore.latest = function() {
  return _latestReservation;
};

ReservationStore.booked = function(id) {
  // debugger;
  var reservation;
  Object.keys(_reservations).forEach(function(res) {
    if (id === _reservations[res].workspaceId) {
      return true;
    }
  });
};

ReservationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RESERVATION_CREATED":
      _addReservation(payload.reservation);
      _latestReservation = payload.reservation;
      ReservationStore.__emitChange();
      break;
    case "RESERVATION_DELETED":
      _deleteReservation(payload.id);
      ReservationStore.__emitChange();
      break;
    case "RESERVATIONS_FOUND":
      payload.reservations.forEach(function(res) {
        _addReservation(res);
      });
      ReservationStore.__emitChange();
  }
};

module.exports = ReservationStore;
