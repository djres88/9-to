var React = require('react');
var NavbarItem = require('./NavbarItem');

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="nav-on-landing">
        <a className="navbar-items">Test</a>
        <a className="navbar-items">Test</a>
        <a className="navbar-items">Test</a>
      </div>
    );
  }
});

module.exports = Navbar;
