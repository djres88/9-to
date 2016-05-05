var ApiUtil = require('../util/ApiUtil');
var AppDispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  updateOfficeType: function(types) {
    AppDispatcher.dispatch({
      actionType: "OFFICE_TYPES",
      officeTypes: types
    });
  },

  updateCapacity: function(capacity) {
    if (capacity === "5+") {
      AppDispatcher.dispatch({
        actionType: "CAPACITY",
        capacity: capacity
      });
    }
  },

  updateBeginDate: function(beginDate) {
    AppDispatcher.dispatch({
      actionType: "BEGIN_DATE",
      beginDate: beginDate
    });
  },

  updateEndDate: function(endDate) {
    AppDispatcher.dispatch({
      actionType: "END_DATE",
      endDate: endDate
    });
  }
};
