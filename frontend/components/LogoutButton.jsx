var React = require("react");
var UserActions = require("../actions/UserClientActions");
var UserStore = require("../stores/UserStore");
var hashHistory = require("react-router").hashHistory;
var UserDropdown = require("../components/UserDropdown");

var LogoutButton = React.createClass({
	getInitialState: function(){
		return {loggedIn: true};
	},

	handleSubmit: function(e){
		e.preventDefault();
		UserActions.logout();
	},

	componentDidMount: function() {
		this.listener = UserStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.listener.remove();
	},

	_onChange: function() {
		var currentUser = UserStore.currentUser();
		this.setState({loggedIn: false});
	},

	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},

	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},

	render: function(){
		if (this.state.loggedIn) {
			return (
				<ul>
					<UserDropdown className="dropdown"/>
				</ul>
			);
		} else {
			return (
				<ul>
					<UserDropdown className="dropdown"/>
					<li id="logout-link" className="dropdown" onClick={this.logout}></li>
				</ul>
			);
		}
	}
});

module.exports = LoginForm;
