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

ReservationStore.all = function() {
  var reservations = {};
  Object.keys(_reservations).forEach(function(key) {
    reservations[key] = _reservations[key];
  });
  return reservations;
};

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
    case "WORKSPACE_RECEIVED":
      _reservations = {};
      payload.workspace.reservations.forEach(function(res) {
        _addReservation(res);
      });
      ReservationStore.__emitChange();
      break;
    // case "RESERVATIONS_FOUND":
    //   _reservations = {};
    //   payload.reservations.forEach(function(res) {
    //     _addReservation(res);
    //   });
    //   ReservationStore.__emitChange();
  }
};

module.exports = ReservationStore;
