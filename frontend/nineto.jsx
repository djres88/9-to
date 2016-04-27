//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
var FakeEmptyComp = require('./components/FakeEmptyComp');
var LoginForm = require('./components/LoginForm');
var Navbar = require('./components/Navbar/Navbar');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div id="above-fold-background">
          <header><Navbar /></header>
        </div>
        {this.props.children}
      </div>
    );
  }
});


var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginForm} />
      <Route path="/fake" component={FakeEmptyComp} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(Router, document.getElementById('content'));
});
