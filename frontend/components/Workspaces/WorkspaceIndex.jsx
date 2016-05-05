var React = require('react');

var WorkspaceStore = require('../../stores/WorkspaceStore');

var ClientActions = require('../../actions/ClientActions');
var WorkspaceIndexItem = require('./WorkspaceIndexItem');
var Navbar = require('../Navbar/Navbar');
var Map = require('../Map/Map');
var FilterParams = require('../Search/FilterParams');
var FilterStore = require('../../stores/FilterStore');
// var SearchLocationsBar = require('../Search/SearchLocationsBar');

var WorkspaceIndex = React.createClass({
  getInitialState: function() {
    return {workspaces: "", page: 1};
  },

  componentDidMount: function () {
    this.listener = WorkspaceStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({workspaces: WorkspaceStore.all()});
  },

  // nextRecords: function(e) {
  //   this.setState({page: e.currentTarget.value + 1});
  //   // ClientActions.fetchWorkspaces(e.currentTarget.value);
  // },

  render: function() {
    var workspaces = this.state.workspaces;
    var workspaceComponents = Object.keys(workspaces).map(function(key, i) {
      return <WorkspaceIndexItem key={i} workspace={workspaces[key]} />;
    });

    return (
      <div className="search-listings-page">
        <Map
          lat={parseFloat(this.props.location.query.lat)} lng={parseFloat(this.props.location.query.lng)}
          spaces={workspaces}
          />
        <FilterParams
          location={this.props.location}
        />
        <div className="workspace-index">{workspaceComponents}</div>
      </div>
    );
  }
});
// <div type="button" onClick={this.nextRecords} value={this.state.page}>{this.state.page}</div>

module.exports = WorkspaceIndex;
