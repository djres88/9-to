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
    console.log(this.props);
    this.listener = WorkspaceStore.addListener(this._onChange);
    // TODO: this also listens to filters store, passes relevant props to map and search params
    ClientActions.fetchWorkspaces();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({workspaces: WorkspaceStore.all()});
  },

  _fetchFilteredWorkspaces: function(event) {
    // TODO: Goal is to fetch the workspaces that are (a) bound by the map and (b) meet the criteria in the SearchParams.
    // (1) looks at filter store
    // (2) executed some function that retrieved bounds of map: GlobalMap.getBounds
    // (3) Construct params object combining 1/2
    // (4) Invoke client action, send params to DB, retrieve workspaces
  },

  render: function() {
    var workspaces = this.state.workspaces;
    var workspaceComponents = Object.keys(workspaces).map(function(key, i) {
      return <WorkspaceIndexItem key={i} workspace={workspaces[key]} />;
    });

    // TODO: pass filter props to search params
    return (
      <div className="search-listings-page">
        <Map spaces={workspaces} fetchSpaces={this._fetchFilteredWorkspaces}/>
        <SearchParams />
        <div className="workspace-index">{workspaceComponents}</div>
      </div>
    );
  }
});

module.exports = WorkspaceIndex;
