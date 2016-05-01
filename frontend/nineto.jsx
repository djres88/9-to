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
var WorkspaceIndex = require('./components/Workspaces/WorkspaceIndex');
var Home = require('./components/Home');

//Check for logged in current user on page load.
function preloadUser() {
  UserActions.fetchCurrentUser();
}

// Set nav class according to current route.
var navClass;
// TODO: may need to adjust how we're detecting the route here.
if (window.location.hash[2] === "?") {
  navClass = 'nav-home';
} else {
  navClass = 'nav-detail';
}

var App = React.createClass({
  componentDidMount: function() {
    preloadUser();
  },
  render: function() {
    return (
      <div>
        <Navbar className={navClass}/>
        {this.props.children}
      </div>
    );
  }
});

// For testing
window.hash = hashHistory;
window.User = UserStore;
window.UserApiUtil = require('./util/UserApiUtil');

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="s" component={WorkspaceIndex}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, document.getElementById('content'));
});
