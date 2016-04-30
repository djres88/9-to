var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var _workspaces = {};

var WorkspaceStore = new Store(AppDispatcher);

WorkspaceStore.all = function () {
  return Object.assign({}, _workspaces);
};

WorkspaceStore.find = function(id) {
  return workspaces[id];
};

WorkspaceStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "WORKSPACES_RECEIVED":
      _workspaces = payload.workspaces;
      this.__emitChange();
      break;
    case "WORKSPACE_RECEIVED":
      _workspaces[payload.workspace.id] = payload.workspace;
      this.__emitChange();
      break;
  }
};

module.exports = WorkspaceStore;
