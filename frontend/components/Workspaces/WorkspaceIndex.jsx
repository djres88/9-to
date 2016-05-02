var React = require('react');

var WorkspaceStore = require('../../stores/WorkspaceStore');
var ClientActions = require('../../actions/ClientActions');
var WorkspaceIndexItem = require('./WorkspaceIndexItem');
var Navbar = require('../Navbar/Navbar');
var Map = require('../Map/Map');
var SearchParams = require('../Search/SearchParams');

var WorkspaceIndex = React.createClass({
  getInitialState: function() {
    return {workspaces: ""};
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
      <div className="search-listings-page">
        <SearchParams />
        <div className="workspace-index">{workspaceComponents}</div>
        <Map />
      </div>
    );
  }
});

module.exports = WorkspaceIndex;
