var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');

var NavbarItem = React.createClass({
  logout: function() {
    UserActions.logout();
  },

  menuDropdown: function() {
    if (!this.props.sendClass) {
      return;
    } else {
      var username = UserStore.currentUser().username;
      return (
        <ul className="user-menu">
          <li id="user-menu-username">{username}</li>
          <hr/>
          <li>My Account</li>
          <hr/>
          <li onClick={this.logout}>Logout</li>
        </ul>
      );
    }
  },

  getClassName: function() {
    if (!this.props.sendClass) {
      return "navbar-items";
    } else {
      return this.props.sendClass;
    }
  },

  render: function() {
    return (
      <div
        id={this.props.id}
        className={this.getClassName()}
        onClick={this.props.actions}>
          {this.props.text}
          {this.menuDropdown()}
      </div>
    );
  }
});

module.exports = NavbarItem;
