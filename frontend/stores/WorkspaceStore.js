var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var _workspaces = {};

var WorkspaceStore = new Store(AppDispatcher);

WorkspaceStore.all = function () {
  // Object.assign not working in Safari.
  return _workspaces;
};

WorkspaceStore.find = function(id) {
  return _workspaces[id];
};

WorkspaceStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "WORKSPACES_RECEIVED":
      _workspaces = {};
      payload.workspaces.forEach(function(space) {
        _workspaces[space.id] = space;
      });
      this.__emitChange();
      break;
    case "WORKSPACE_RECEIVED":
      _workspaces[payload.workspace.id] = payload.workspace;
      this.__emitChange();
      break;
    // case "OFFICE_TYPES":
    //   this.resetWorkspaces();
    //   filterOffices(payload.types);
    //   this.__emitChange();
    //   break;
    // case "CAPACITY":
    //   this.resetWorkspaces();
    //   this.__emitChange();
    //   break;
    // case "BEGIN_DATE":
    //   this.resetWorkspaces();
    //   this.__emitChange();
    //   break;
    // case "END_DATE":
    //   this.resetWorkspaces();
    //   this.__emitChange();
    //   break;
  }
};

module.exports = WorkspaceStore;
