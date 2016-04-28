var React = require('react');
var NavbarItem = require('./NavbarItem');
var hashHistory = require('react-router').hashHistory;
var UserStore = require('../../stores/UserStore');
var LoginForm = require('../LoginForm');

var Navbar = React.createClass({
  getInitialState: function() {
    return {route: "", loggedIn: false, userMenu: "hide"};
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
  },

  _onChange: function() {
    this.setState({loggedIn: UserStore.currentUser ()});
  },

  goHome: function() {
    hashHistory.push("/");
    // TODO: ? this.props.location not working... something wrong with hashHistory?
    this.setState({route: window.location.hash});
  },

  showUserMenu: function() {
    this.setState({userMenu: "show"});
  },

  hideUserMenu: function() {
    this.setState({userMenu: "hide"});
  },

  userMenuDisplay: function() {
    if (!this.state.userMenu) {
      return;
    }

    return (
      <div class="user-menu">
        <li>Thing</li>
        <li>Thing2</li>
      </div>
    );
  },

  userLoggedIn: function() {
    var farRightButton;
    if (this.state.loggedIn) {
      farRightButton =
          <NavbarItem id="user-dropdown-menu" mouseover={this.showUserMenu} mouseleave={this.hideUserMenu} text="User Icon"></NavbarItem>;
    } else {
      farRightButton = <LoginForm></LoginForm>;
    }
    return farRightButton;
  },

  addSpace: function() {

  },

  render: function() {
    return (
      <div className="nav-on-landing">
        <NavbarItem id="nav-logo" className="logo" actions={this.goHome} text="Logo"></NavbarItem>
        <NavbarItem id="list-your-space" actions={this.addSpace} text="List Your Space"></NavbarItem>
        {this.userLoggedIn()}
        {this.userMenuDisplay()}
      </div>
    );
  }
});

module.exports = Navbar;
