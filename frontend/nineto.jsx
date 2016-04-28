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
var UserActions = require('./actions/UserActions');
var UserStore = require('./stores/UserStore');
//React Add-Ons
var Modal = require("react-modal");

//Components
var FakeEmptyComp = require('./components/FakeEmptyComp');
var LoginForm = require('./components/LoginForm');
var Navbar = require('./components/Navbar/Navbar');

// TODO

function preloadUser() {
  UserActions.fetchCurrentUser();
}

var App = React.createClass({
  componentDidMount: function() {
    preloadUser();
  },
  render: function() {
    return (
      <div>
        <div id="above-fold-background">
          <Navbar />
        </div>
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
      <Route path="/login" component={LoginForm} />
      <Route path="/fake" component={FakeEmptyComp} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(Router, document.getElementById('content'));
});
