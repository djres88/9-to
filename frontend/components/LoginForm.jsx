var React = require("react");
var UserActions = require("../actions/UserActions");
var UserStore = require("../stores/UserStore");
var hashHistory = require("react-router").hashHistory;
var NavbarItem = require("./Navbar/NavbarItem");
var Modal = require("react-modal");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var SignUp = require("./SignupForm");
//LoginForm Styles



var LoginForm = React.createClass({
	getInitialState: function(){
		return({ modalOpen: false, userErrors: "", username: "", password: ""});
	},

	// Modal Functions
	closeModal: function(){
		this.setState({ modalOpen: false });
	},
	openModal: function(){
		this.setState({ modalOpen: true });
	},

	// Form Functions
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
		var errors = UserStore.errors();
		console.log(errors);
		this.setState({currentUser: currentUser, userErrors: errors});
	},

	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
			{
				Object.keys(this.state.userErrors).map(function(key, i){
					return (<li className="user-errors" key={i}>{self.state.userErrors[key]}</li>);
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

	signUpLink: function() {
		return <SignUp />;
	},

	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
				<form class="login-form" onSubmit={this.handleSubmit}>
					<section>
						<input className="form-box" type="text"
							placeholder="Username"
							value={this.state.username} onChange={this.updateUsername}/>
						<br/>
						<input className="form-box" type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
					</section>
					<br/>
					<input id="login-button" type="Submit" value="Log In" readOnly="true"/>
					<hr/>
					<Link to="/" className="" onClick={this.signUpLink}>Sign Up</Link>
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
		    position        : 'fixed',
		    top             : '250px',
		    left            : '250px',
		    right           : '250px',
		    bottom          : '250px',
		    border          : '1px solid #ccc',
				// Whydis? TODO: see right margin
		    padding         : '25px 25px 25px 25px',
		    zIndex					: 11
		  }
		};

		return (
			<div>
				<NavbarItem id="login" actions={this.openModal} text="Login"></NavbarItem>

				<Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={style}>
					{this.form()}
					{this.errors()}
				</Modal>
			</div>
		);
	}
});

module.exports = LoginForm;
