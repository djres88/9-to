var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser, _errors;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	UserStore.login(payload.user);
      UserStore.__emitChange();
      break;
    case "LOGOUT":
    	UserStore.logout();
      UserStore.__emitChange();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors.responseText);
      UserStore.__emitChange();
      break;
  }
};

UserStore.login = function(user){
	_currentUser = user;
  _errors = null;
};

UserStore.logout = function(){
  _currentUser = null;
  _errors = null;
};

UserStore.currentUser = function(){
  return _currentUser;
};

UserStore.setErrors = function(errors) {
  _errors = JSON.parse(errors).errors;
};

UserStore.errors = function(){
  if (_errors){
    return _errors;
  }
};

module.exports = UserStore;
