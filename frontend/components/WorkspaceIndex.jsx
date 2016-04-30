var React = require('react');
var WorkspaceStore = require('../stores/WorkspaceStore');
var ClientActions = require('../actions/ClientActions');
var WorkspaceIndexItem = require('./WorkspaceIndexItem')

var WorkspaceIndex = React.createClass({
  getInitialState: function() {
    return {workspaces: WorkspaceStore.all()};
  },

  componentDidMount: function () {
    this.listener = WorkspaceStore.addListener(this._onChange);
    ClientActions.fetchWorkspaces();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({workspaces: WorkspaceStore.all()});
  },


  render: function() {
    var workspaces = this.state.workspaces;
    var workspaceComponents = Object.keys(workspaces).map(function(key, i) {
      return <WorkspaceIndexItem key={i} workspace={workspaces[key]} />;
    });
    return (
      <div className="workspace-index">{workspaceComponents}</div>
    );
  }
});

module.exports = WorkspaceIndex;
