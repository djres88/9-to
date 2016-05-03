var React = require('react');
var NavbarItem = require('./NavbarItem');
var hashHistory = require('react-router').hashHistory;

var UserStore = require('../../stores/UserStore');

var LoginForm = require('../Forms/LoginForm');
var Search = require('../Search/Search');

var Navbar = React.createClass({
  getInitialState: function() {
    return {route: window.location.hash, loggedIn: false, userMenu: "hide", scrollNavAction: "off"};
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this._onChange);
    if (this.state.route[2] !== "s") {
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  componentWillUnmount: function() {
    this.listener.remove();
    if (this.state.route[2] !== "s") {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },

  handleScroll: function(event) {
    event.preventDefault();
    if (event.srcElement.body.scrollTop > 585 && this.state.scrollNavAction === "off") {
      this.setState({scrollNavAction: "on"});
    } else if (event.srcElement.body.scrollTop <= 585 && this.state.scrollNavAction === "on") {
      this.setState({scrollNavAction: "off"});
    } else {
      return;
    }
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

  toggleLoginIcon: function() {
    var loginIcon;
    if (this.state.loggedIn) {
      loginIcon =
          <NavbarItem sendClass="navbar-items dropdown" id="user-dropdown-menu" text="User Icon"></NavbarItem>;
    } else {
      loginIcon = <LoginForm></LoginForm>;
    }
    return loginIcon;
  },

  addSpace: function() {

  },

  render: function() {
    return (
      <div id={"scroll-nav-" + this.state.scrollNavAction} className={this.props.className}>
        <NavbarItem id="nav-logo" className="logo" actions={this.goHome} text="Logo"></NavbarItem>
        <NavbarItem id="list-your-space" actions={this.addSpace} text="List Your Space"></NavbarItem>
        {this.toggleLoginIcon()}
      </div>
    );
  }
});

module.exports = Navbar;
