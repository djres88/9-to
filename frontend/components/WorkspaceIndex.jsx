var React = require('react');
var WorkspaceStore = require('../stores/WorkspaceStore');
// var WorkspaceIndexItem = require('./WorkspaceIndexItem')

var WorkspaceIndex = React.createClass({
  getAllWorkspaces: function() {
    return WorkspaceStore.all();
  },

  render: function() {
    var workspaces = this.getAllWorkspaces();
    var workspaceComponents = workspaces.map(function(space, i) {
      return <WorkspaceIndexItem key={i} workspace={workspace} />;
    });
    return (
      <div className="workspace-index">{workspaceComponents}</div>
    );
  }
});

module.exports = WorkspaceIndex;
