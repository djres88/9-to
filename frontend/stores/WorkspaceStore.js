var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var _workspaces = {};
var _workspacesAll = {};

var WorkspaceStore = new Store(AppDispatcher);

WorkspaceStore.all = function () {
  return Object.assign({}, _workspaces);
};

WorkspaceStore.find = function(id) {
  return _workspaces[id];
};

WorkspaceStore.resetWorkspaces = function() {
  _workspaces = _workspacesAll;
};

var filterOffices = function(office_types) {
  for (var i = 0; i < office_types.length; i++) {
    _workspaces.forEach(function(space) {
      if (space.office.indexOf(office_types[i]) !== -1) {
        _workspaces[space.id] = space;
      }
    });
  }
};

var filterCapacity = function(capacity) {

};

var filterBeginDate = function(beginDate) {

};

var filterEndDate = function(endDate) {

};

var filterPrice = function(price) {

};

WorkspaceStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "WORKSPACES_RECEIVED":
      _workspaces = {};
      _workspacesAll = {};
      payload.workspaces.forEach(function(space) {
        _workspaces[space.id] = space;
        _workspacesAll[space.id] = space;
      });
      this.__emitChange();
      break;
    case "WORKSPACE_RECEIVED":
      _workspaces[payload.workspace.id] = payload.workspace;
      this.__emitChange();
      break;
    case "OFFICE_TYPES":
      this.resetWorkspaces();
      filterOffices(payload.types);
      this.__emitChange();
      break;
    case "CAPACITY":
      this.resetWorkspaces();
      this.__emitChange();
      break;
    case "BEGIN_DATE":
      this.resetWorkspaces();
      this.__emitChange();
      break;
    case "END_DATE":
      this.resetWorkspaces();
      this.__emitChange();
      break;
  }
};

module.exports = WorkspaceStore;
