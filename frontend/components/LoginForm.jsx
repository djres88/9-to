var React = require("react");
var UserActions = require("../actions/UserActions");
var UserStore = require("../stores/UserStore");
var hashHistory = require("react-router").hashHistory;
var NavbarItem = require("./Navbar/NavbarItem");
var Modal = require("react-modal");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
//LoginForm Styles


var LoginForm = React.createClass({
	getInitialState: function(){
		return({ modalOpen: false, userErrors: "", username: "", password: "", formType: "login"});
	},

	componentDidMount: function() {
		this.listener = UserStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.listener.remove();
	},

	_onChange: function() {
		var errors = UserStore.errors();
		var loggedIn = false;
		if (UserStore.currentUser()) {
			loggedIn = true;
		}
		this.setState({userErrors: errors});
	},

	// Modal Functions
	closeModal: function(){
		this.setState({ modalOpen: false, formType: "login"});
	},
	openModal: function(){
		this.setState({ modalOpen: true });
	},

	// Login Functions
	credentials: function() {
		return {
			username: this.state.username,
			password: this.state.password
		};
	},

	loginUser: function() {
		UserActions.login(this.credentials());
	},

	signupUser: function() {
		UserActions.signup(this.credentials());
	},

	guestLogin: function() {
		UserActions.guestLogin();
	},

	// Form Functions
	setForm: function(e){
		e.preventDefault();
		this.setState({form: e.currentTarget.value});
	},

	handleSubmit: function(e) {
		e.preventDefault();
		if (this.state.formType === "login") {
			this.loginUser();
		} else {
			this.signupUser();
		}
		this.setState({username: "", password: ""});
	},

	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
			{Object.keys(this.state.userErrors).map(function(key, i){
				return (<li className="user-errors" key={i}>{self.state.userErrors[key]}</li>);
			})}
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

	signUpLink: function() {
		this.setState({formType: "signup", username: "", password: ""});
	},

	loginLink: function() {
		this.setState({formType: "login", username: "", password: ""});
	},

	baseFormElements: function() {
		return (
		<section className="form-inputs">
			<input
				className="form-box"
				type="text"
				placeholder="Username"
				value={this.state.username}
				onChange={this.updateUsername}/>
			<br/>
			<input
				className="form-box"
				type="password" placeholder="Password"
				value={this.state.password}
				onChange={this.updatePassword}/>
			<br/>
		</section>
		);
	},

	signupFormElements: function() {
		return {
			formId: "signup-form",
			header: "Get to Work!",
			buttonId: "signup-button",
			buttonValue: "Sign Up",
			toggleFormElement:
			<p>Already signed up?
				<Link to="/" id="login-link" onClick={this.loginLink}> Log In</Link>
			</p>
		};
	},

	loginFormElements: function() {
		return {
			formId: "login-form",
			header: "Welcome Back!",
			buttonId: "login-button",
			buttonValue: "Log In",
			toggleFormElement:
			<p>Don't have an account?
				<Link to="/" id="sign-up-link" onClick={this.signUpLink}> Sign Up</Link>
			</p>
		};
	},

	form: function(){
		var el;
		if (this.state.formType === "login") {
			el = this.loginFormElements();
		} else {
			el = this.signupFormElements();
		}

		return (
			<form id={el.formId} onSubmit={this.handleSubmit}>
				<h1>{el.header}</h1>
				{this.errors()}
				{this.baseFormElements()}
				<input className="form-buttons" id={el.buttonId} type="Submit" value={el.buttonValue} readOnly="true"/>
				<button className="form-buttons" id="guest-login" onClick={this.guestLogin}>Guest Login</button>
				<hr/>
				{el.toggleFormElement}
			</form>
		);
	},

	render: function(){
		//Modal Styles
		var style = {
		  overlay : {
		    position        : 'fixed',
		    top             : 0,
		    left            : 0,
		    right           : 0,
		    bottom          : 0,
		    backgroundColor : 'rgba(255, 255, 255, 0.75)',
				zIndex					: 10
		  },

		  content : {
		    position        : 'relative',
		    top             : '120px',
		    margin          : 'auto auto',
		    bottom          : '120px',
		    border          : '1px solid #ccc',
				width						: '500px',
				// Whydis? TODO: see right margin
		    padding         : '25px 35px 25px 35px',
		    zIndex					: 11
		  }
		};

		return (
			<div>
				<NavbarItem id="login" actions={this.openModal} text="Login"></NavbarItem>
				<Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={style}>
					{this.form()}
				</Modal>
			</div>
		);
	}
});

module.exports = LoginForm;
