var React = require('react');
var NavbarItem = require('./NavbarItem');
var hashHistory = require('react-router').hashHistory;
var UserStore = require('../../stores/UserStore');
var LoginForm = require('../LoginForm');

var Navbar = React.createClass({
  getInitialState: function() {
    return {route: "", loggedIn: false};
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
    console.log(this.state.loggedIn);
  },

  _onChange: function() {
    // this.setState({loggedIn: UserStore.currentUser ()});
    // debugger
  },

  goHome: function() {
    hashHistory.push("/");
    // TODO: ? this.props.location not working... something wrong with hashHistory?
    this.setState({route: window.location.hash});
  },

  userMenuToggle: function() {
    var farRightButton;
    if (this.state.loggedIn) {
      console.log(this.state.loggedIn);
      farRightButton =
        <div>
          <NavbarItem id="user-dropdown-menu" actions={this.dropdownActions} text="User Icon"></NavbarItem>
        </div>;
    } else {
      farRightButton = <LoginForm></LoginForm>;
    }
    return farRightButton;
  },

  addSpace: function() {

  },

  render: function() {
    var alwaysPresentHeaders = (
      <div>
        <NavbarItem id="logo" actions={this.goHome} text="Logo"></NavbarItem>
        <NavbarItem id="list-your-space" actions={this.addSpace} text="List Your Space"></NavbarItem>
      </div>
    );

    return (
      <div className="nav-on-landing">
        {alwaysPresentHeaders}
        {this.userMenuToggle()}
      </div>
    );
  }
});

module.exports = Navbar;
