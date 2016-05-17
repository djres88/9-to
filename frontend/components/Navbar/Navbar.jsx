var React = require('react');
var NavbarItem = require('./NavbarItem');
var hashHistory = require('react-router').hashHistory;

var UserStore = require('../../stores/UserStore');

var LoginForm = require('../Forms/LoginForm');
var Search = require('../Search/Search');
var SearchLocationsBar = require('../Search/SearchLocationsBar');

var Navbar = React.createClass({
  getInitialState: function() {
    return {route: window.location.hash, loggedIn: false, userMenu: "hide", scrollNavAction: "off", searchText: ""};
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this._onChange);
    var that = this;
    if (that.state.route[2] !== "s") {
      window.addEventListener('scroll', that.handleScroll);
      window.addEventListener('popstate', function() {
        that.setState({scrollNavAction: "off"});
      });
    }
  },

  componentWillUnmount: function() {
    this.listener.remove();
    window.removeEventListener('scroll', this.handleScroll);
  },


  handleScroll: function(event) {
    if (window.location.hash[2] === "s") {
      return;
    }
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
    this.setState({route: window.location.hash});
  },

  goHome: function() {
    hashHistory.push("/");
    // TODO: ? this.props.location not working... something wrong with hashHistory?
    this.setState({route: window.location.hash});
    window.addEventListener('scroll', this.handleScroll);
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
      username = UserStore.currentUser().username;
      faIcon = <i className="fa fa-user" aria-hidden="true">&nbsp;&nbsp;</i>;
      loginIcon =
          <NavbarItem icon={faIcon} text={username} sendClass="navbar-items dropdown" id="user-dropdown-menu" ></NavbarItem>;
    } else {
      loginIcon = <LoginForm></LoginForm>;
    }
    return loginIcon;
  },

  toggleSearchBar: function() {
    if (window.location.hash[2] === "?") {
      return;
    } else {
      return <SearchLocationsBar text={this.state.searchText} className="searchbar-nav"/>;
    }
  },

  addSpace: function() {

  },

  render: function() {

    return (
      <div id={"scroll-nav-" + this.state.scrollNavAction} className={this.props.className}>
        <NavbarItem id="nav-logo" className="logo" actions={this.goHome} text="9to"></NavbarItem>
        {this.toggleSearchBar()}
        <NavbarItem id="list-your-space" actions={this.addSpace} text="List Your Space"></NavbarItem>
        {this.toggleLoginIcon()}
      </div>
    );
  }
});

module.exports = Navbar;
