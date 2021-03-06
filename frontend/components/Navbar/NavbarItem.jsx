var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserClientActions');
var HashHistory = require('react-router').hashHistory;

var NavbarItem = React.createClass({
  logout: function() {
    UserActions.logout();
  },

  goToAccount: function() {
    HashHistory.push({
      pathname: "profile/reservations"
    });
  },

  menuDropdown: function() {
    if (!this.props.sendClass) {
      return;
    } else {
      var username = UserStore.currentUser().username;
      return (
        <ul className="user-menu">
          <li onClick={this.goToAccount}>My Account</li>
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
          <span id="navbar-text">
            {this.props.icon}
            {this.props.text}
            {this.menuDropdown()}
          </span>
      </div>
    );
  }
});

module.exports = NavbarItem;
