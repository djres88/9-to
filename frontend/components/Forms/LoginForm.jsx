var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var hashHistory = require("react-router").hashHistory;

var Modal = require("react-modal");
var UserActions = require("../../actions/UserClientActions");
var UserStore = require("../../stores/UserStore");
var NavbarItem = require("../Navbar/NavbarItem");

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
	openModalAsLogin: function(){
		this.setState({formType: "login"});
		this.openModal();
	},
	openModalAsSignup: function(){
		this.setState({formType: "signup"});
		this.openModal();
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
		var errors = this.state.userErrors;
		if (!errors){
			return;
		}

		return (
			<ul>
				{errors.map(function(err, i) {
					return (<li className="user-errors" key={i}>{err}</li>);
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
		this.setState({formType: "signup", username: "", password: "", userErrors: []});
	},

	loginLink: function() {
		this.setState({formType: "login", username: "", password: "",  userErrors: []});
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
			<div>
				<form id={el.formId} onSubmit={this.handleSubmit}>
					<h1>{el.header}</h1>
					{this.errors()}
					{this.baseFormElements()}
					<input className="form-buttons" id={el.buttonId} type="Submit" value={el.buttonValue} readOnly="true"/>
				</form>
				<button className="form-buttons" id="guest-login" onClick={this.guestLogin}>Guest Login</button>
				<hr/>
				{el.toggleFormElement}
			 </div>
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
			<div className="login-and-signup">
				<NavbarItem id="signup" actions={this.openModalAsSignup} text="Sign Up"></NavbarItem>
				<NavbarItem id="login" actions={this.openModalAsLogin} text="Log In"></NavbarItem>
				<Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={style}>
					{this.form()}
				</Modal>
			</div>
		);
	}
});

module.exports = LoginForm;
