var React = require('react');

var WorkspaceStore = require('../../stores/WorkspaceStore');
var UserStore = require('../../stores/UserStore');

var ClientActions = require('../../actions/ClientActions');
var WorkspaceIndexItem = require('./WorkspaceIndexItem');
var Map = require('../Map/Map');
var FilterParams = require('../Search/FilterParams');

var WorkspaceIndex = React.createClass({
  getInitialState: function() {
    return {workspaces: "", page: 1 };
  },

  componentDidMount: function () {
    this.listener = WorkspaceStore.addListener(this._onChange);
    this.user = UserStore.currentUser();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({workspaces: WorkspaceStore.all()});
  },

  //TODO: Fetch batches of workspaces by the 18s. Code is already set up on back end, just need styling here.
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
      <div className="workspace-index" user={this.user}>{workspaceComponents}</div>
      </div>
    );
  }
});

module.exports = WorkspaceIndex;

//Filters on for searching purposes
// updateBeginDate: function(date) {
//   end = this.state.endDate;
//   if (end && date._d > end._d) {
//     alert("End date cannot occur before start date.");
//   } else {
//     this.setState({
//       beginDate: date
//     });
//   }
// },
//
// updateEndDate: function(date) {
//   begin = this.state.beginDate;
//   if (begin && date._d < begin._d) {
//     alert("End date cannot occur before start date.");
//   } else {
//     this.setState({
//       endDate: date
//     });
//   }
// },
