var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var FilterStore = new Store(AppDispatcher);

var _params = {
  price: {minPrice: 0, maxPrice: 1000000},
  capacity: 1,
  dates: {beginDate: null, endDate: null},
  officeTypes: ["Coworking Space", "Private Office", "Home Office"]
};

FilterStore.params = function() {
  return Object.assign({}, _params);
};

FilterStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "OFFICE_TYPES":
      _params.officeTypes = payload.officeTypes;
      FilterStore.__emitChange();
      break;
    case "CAPACITY":
      _params.capacity = parseInt(payload.capacity);
      FilterStore.__emitChange();
      break;
    case "BEGIN_DATE":
      _params.dates.beginDate = payload.beginDate;
      FilterStore.__emitChange();
      break;
    case "END_DATE":
      _params.dates.endDate = payload.endDate;
      FilterStore.__emitChange();
      break;
    case "PRICES":
      _params.price.minPrice = payload.prices[0];
      _params.price.maxPrice = payload.prices[1];
      FilterStore.__emitChange();
      break;
  }
};

module.exports = FilterStore;
