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
  Object.assign({}, _reservations);
  debugger;
};

ReservationStore.latest = function() {
  return _latestReservation;
};

ReservationStore.booked = function(id) {
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
    case "RESERVATION_VIEW_ALL":
      _reservations = payload.reservations;
      ReservationStore.__emitChange();
  }
};

module.exports = ReservationStore;
