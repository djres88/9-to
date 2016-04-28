var React = require('react');

var NavbarItem = React.createClass({
  render: function() {
    return (
      <a id={this.props.id} className="navbar-items" onClick={this.props.actions} onMouseOver={this.props.mouseover} onMouseLeave={this.props.mouseleave}>{this.props.text}</a>
    );
  }
});

module.exports = NavbarItem;
