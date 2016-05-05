var React = require('react');

var WorkspaceStore = require('../../stores/WorkspaceStore');

var ClientActions = require('../../actions/ClientActions');
var WorkspaceIndexItem = require('./WorkspaceIndexItem');
var Navbar = require('../Navbar/Navbar');
var Map = require('../Map/Map');
var FilterParams = require('../Search/FilterParams');
// var SearchLocationsBar = require('../Search/SearchLocationsBar');

var WorkspaceIndex = React.createClass({
  getInitialState: function() {
    return {workspaces: ""};
  },

  componentDidMount: function () {
    console.log("WorkspaceIndex props", this.props);
    this.listener = WorkspaceStore.addListener(this._onChange);
    // TODO: this also listens to filters store, passes relevant props to map and search params
    // this.filtersListener = FilterStore.addListener(this._updateSearch);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({workspaces: WorkspaceStore.all()});
  },

  // TODO
  updateSearch: function() {

  },

  _fetchFilteredWorkspaces: function(event) {
    // TODO: Goal is to fetch the workspaces that are (a) bound by the map and (b) meet the criteria in the FilterParams.
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
    // console.log(this.props.params);
    // TODO: pass filter props to search params
    return (
      <div className="search-listings-page">
        <Map lat={parseFloat(this.props.location.query.lat)} lng={parseFloat(this.props.location.query.lng)} spaces={workspaces} fetchSpaces={this._fetchFilteredWorkspaces}/>
        <FilterParams />
        <div className="workspace-index">{workspaceComponents}</div>
      </div>
    );
  }
});

module.exports = WorkspaceIndex;
