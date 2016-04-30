var React = require('react');

var WorkspaceIndexItem = React.createClass({
  render: function() {
    var workspace = this.props.workspace;
    return (
      <ul>
        <li>{workspace.description}</li>
        <li>{workspace.address}</li>
        <li>{workspace.city}</li>
        <li>{workspace.price_week}</li>
        <li>{workspace.main_photo_url}</li>
        <br/>
      </ul>
    );
  }
});

module.exports = WorkspaceIndexItem;
