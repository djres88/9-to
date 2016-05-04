//React
var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

//Action (to populate session store)
var UserActions = require('./actions/UserClientActions');
var UserStore = require('./stores/UserStore');
//React Add-Ons
var Modal = require("react-modal");

//Components
var Navbar = require('./components/Navbar/Navbar');
var Home = require('./components/Home');
var WorkspaceIndex = require('./components/Workspaces/WorkspaceIndex');
var WorkspaceShow = require('./components/Workspaces/WorkspaceShow');
var ReservationForm = require('./components/Forms/ReservationForm');

//Check for logged in current user on page load.
function preloadUser() {
  UserActions.fetchCurrentUser();
}

var App = React.createClass({
  // Set nav class according to current route.
  // TODO: may need to adjust how we're detecting the route here.
  determineNavClass: function() {
    if (window.location.hash[2] === "?") {
      return 'nav-home';
    } else {
      return 'nav-detail';
    }
  },

  componentDidMount: function() {
    // Check for current user.
    preloadUser();
  },

  render: function() {
    return (
      <div>
        <Navbar className={this.determineNavClass()}/>
        {this.props.children}
      </div>
    );
  }
});

// For testing
// window.hash = hashHistory;
// window.User = UserStore;
// window.UserApiUtil = require('./util/UserApiUtil');

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="s(/:city)(/:dates)" component={WorkspaceIndex}/>
      <Route path="workspaces/:workspaceId" component={WorkspaceShow}/>
        <Route path="reservation"/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, document.getElementById('content'));
});
