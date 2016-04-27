var React = require('react');

var NavbarItem = React.createClass({
  render: function() {
    return (
      <a id={this.props.id} className="navbar-items" onClick={this.props.actions}>{this.props.text}</a>
    );
  }
});

module.exports = NavbarItem;
