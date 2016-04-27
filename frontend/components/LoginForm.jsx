var React = require("react");
var UserActions = require("../actions/UserActions");
var UserStore = require("../stores/UserStore");
var hashHistory = require("react-router").hashHistory;

var LoginForm = React.createClass({
	getInitialState: function(){
		return {username: "", password: ""};
	},

	setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},

	handleSubmit: function(e){
		e.preventDefault();
		UserActions.login({
			username: this.state.username,
			password: this.state.password
		});
	},

	componentDidMount: function() {
		this.listener = UserStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.listener.remove();
	},

	_onChange: function() {
		var currentUser = UserStore.currentUser();
		this.setState({currentUser: currentUser});
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

  updateUsername: function(event) {
    event.preventDefault();
    this.setState({username: event.target.value});
  },

  updatePassword: function(event) {
    event.preventDefault();
    this.setState({password: event.target.value});
  },


  // TODO: Eliminate the weird console error(s). Says I "Provided a value prop to a form without an onChange handler." The last input tag (a submit button) seems to be the culprit.
	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleSubmit}>
					<section>
						<label> Username:
							<input type="text" value={this.state.username} onChange={this.updateUsername}/>
						</label>

						<label> Password:
							<input type="password" value={this.state.password} onChange={this.updatePassword}/>
						</label>
					</section>

					<input type="Submit" value="Submit" readOnly="true"/>
				</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
