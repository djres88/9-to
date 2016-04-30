var React = require('react');

var WorkspaceIndexItem = React.createClass({
  render: function() {
    var workspace = this.props.workspace;
    return (
      <li>{workspace}</li>
    );
  }
});

module.exports = WorkspaceIndexItem;
