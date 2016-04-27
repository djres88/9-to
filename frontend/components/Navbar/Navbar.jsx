var React = require('react');
var NavbarItem = require('./NavbarItem');
var hashHistory = require('react-router').hashHistory;
var UserStore = require('../../stores/UserStore');
var LoginForm = require('../LoginForm');

var Navbar = React.createClass({
  getInitialState: function() {
    return {route: "", loggedIn: ""};
  },

  componentDidMount: function() {
    UserStore.addListener(this._onChange);
    this.setState({loggedIn: UserStore.currentUser()});
  },

  _onChange: function() {
    this.setState({loggedIn: UserStore.currentUser()});
  },

  goHome: function() {
    hashHistory.push("/");
    // TODO: ? this.props.location not working... something wrong with hashHistory?
    this.setState({route: window.location.hash});
  },

  userMenuToggle: function() {
    var farRightButton;
    if (this.state.loggedIn) {
      farRightButton = (
        <div>
          <NavbarItem id="user-dropdown-menu" actions={this.dropdownActions} text="User Icon"></NavbarItem>;
        </div>
        );
    } else {
      farRightButton = <LoginForm></LoginForm>;
    }
    return farRightButton;
  },

  // TODO: ? A bunch of conditional logic?
  render: function() {
    var alwaysPresentButton = (
      <div>
        <NavbarItem id="logo" actions={this.goHome} text="Logo"></NavbarItem>
      </div>
    );

    return (
      <div className="nav-on-landing">
        {alwaysPresentButton}
        {this.userMenuToggle()}
      </div>
    );
  }
});

module.exports = Navbar;
