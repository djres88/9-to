var React = require('react');

var WorkspaceIndexItem = React.createClass({
  render: function() {
    var workspace = this.props.workspace;
    return (
      <ul className="workspace-index-item">
        <li>
          <img src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964455/npwq6yzdqyww8oekng7o.jpg" alt={"Workspace Image" + workspace.id}></img>
          <p id="image-overlay-price">{"$" + workspace.price_week + "/wk"}</p>
        </li>

        <li>{workspace.description}</li>
        <br/>
      </ul>
    );
  }
});

module.exports = WorkspaceIndexItem;
//
// <li>{workspace.address}</li>
// <li>{workspace.city}</li>
