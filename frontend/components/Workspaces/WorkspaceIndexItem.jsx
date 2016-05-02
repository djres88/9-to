var React = require('react');
var HashHistory = require('react-router').hashHistory;

var WorkspaceIndexItem = React.createClass({
  showListingDetail: function() {
    HashHistory.push("s/" + this.props.workspace.id);
  },

  render: function() {
    var workspace = this.props.workspace;
    return (
      <ul className="workspace-index-item">
        <li onClick={this.showListingDetail}>
          <img src={workspace.main_photo_url} alt={"Workspace Image" + workspace.id}/>
          <div id="image-overlay-price"><span id="test">{"$" + workspace.price_week + "/wk"}</span></div>
        </li>
        <li>{workspace.description}</li>
      </ul>
    );
  }
});

module.exports = WorkspaceIndexItem;
//
// <li>{workspace.address}</li>
// <li>{workspace.city}</li>
