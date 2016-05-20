var React = require('react');
var ReservationStore = require('../../stores/ReservationStore');
var ClientActions = require('../../actions/ClientActions');
var UserStore = require('../../stores/UserStore');

var UserAccount = React.createClass({
  getInitialState: function() {
    return { user: UserStore.currentUser(), reservations: ["New York", "San Francisco", "Minneapolis "] };
  },

  componentWillMount: function() {
    this.listener = ReservationStore.addListener(this._onChange);
    this.userListener = UserStore.addListener(this._retrievedUser);
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.listener.remove();
  },

  _retrievedUser: function() {
    // on user load, set state and fetch reservations. component will rerender when reservations are returned.
    this.setState({user: UserStore.currentUser()});
    ClientActions.fetchUserReservations(UserStore.currentUser().id);
  },

  _onChange: function() {
    this.setState({reservations: ReservationStore.userReservations()});
    debugger;
  },

  render: function() {
    var reservations;
    if (this.state.reservations.length === 0) {
      reservations = "You do not have any upcoming reservations.";
    } else {
      reservations = this.state.reservations.map(function(res, idx) {
        return (
          <div className="" key={idx+1}>
            <h3>{res.id}</h3>
          </div>
        );
      });
    }

    var username = "";
    if (this.state.user) {
      username = ", " + this.state.user.username;
    }

    return (
      <div className="user-profile-page-container">
        <div className="user-profile-content">
          <div class="">
            <h1>Welcome{username}!</h1>
          </div>
          <h2>Upcoming Reservations</h2>
          <div className="upcoming-trips">
            {reservations}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserAccount;
