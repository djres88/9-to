var React = require('react');
var HashHistory = require('react-router').hashHistory;
var ClientActions = require('../../actions/ClientActions');

var WorkspaceIndexItem = React.createClass({
  showListingDetail: function() {
    ClientActions.fetchReservations(
      // NB: Really we'll need all the reservations eventually, to block out the calendar for reserved dates. user_id: this.props.user,
      this.props.workspace.id
    );

    HashHistory.push("workspaces/" + this.props.workspace.id);
  },

  render: function() {
    var workspace = this.props.workspace;
    return (
      <ul className="workspace-index-item">
        <li onClick={this.showListingDetail}>
          <img src={workspace.thumbnail_url} alt={"Workspace Image" + workspace.id}/>
          <div id="image-overlay-price"><span id="test">{"$" + workspace.price_week + "/wk"}</span></div>
        </li>
        <li>{workspace.description}</li>
      </ul>
    );
  }
});

module.exports = WorkspaceIndexItem;
