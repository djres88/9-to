var React = require('react');
var ReservationStore = require('../../stores/ReservationStore');
var ClientActions = require('../../actions/ClientActions');
var UserStore = require('../../stores/UserStore');
var moment = require('moment');
var HashHistory = require('react-router').hashHistory;

var UserAccount = React.createClass({
  getInitialState: function() {
    return { user: UserStore.currentUser(), reservations: [] };
  },

  componentDidMount: function() {
    this.listener = ReservationStore.addListener(this._onChange);
    this.userListener = UserStore.addListener(this._retrievedUser);
    // Loads on navigation, which is the case 90% of the time, but need to retrieve username just in case user refreshes page.
    if (this.state.user) {
      ClientActions.fetchUserReservations(UserStore.currentUser().id);
    }
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.listener.remove();
  },

  _retrievedUser: function() {
    // on user load, set state and fetch reservations. component will rerender when reservations are returned.
    this.setState({user: UserStore.currentUser()});
    if (this.state.user) {
      ClientActions.fetchUserReservations(UserStore.currentUser().id);
    } else {
      HashHistory.push("/");
    }

  },

  _onChange: function() {
    this.setState({reservations: ReservationStore.userReservations()});
  },

  render: function() {
    var reservations;
    if (this.state.reservations.length === 0) {
      reservations = "You do not have any upcoming reservations.";
    } else {
      reservations = this.state.reservations.map(function(res, idx) {
        var start = moment(res.start_date, "YYYY-MM-DD");
        var end = moment(res.end_date, "YYYY-MM-DD");
        var time = (moment.duration(end.diff(start)).days() + 1);
        var days;
        if (time > 1) {
          days = " days.";
        } else {
          days = " day.";
        }
        return (
          <div key={idx+1}>
            <h3>{res.city}</h3>
            <h4 className="dates">ARRIVE: {start.format('dddd, MMMM Do, YYYY')}</h4>
            <h4 className="dates">DEPART: {end.format('dddd, MMMM Do, YYYY')}</h4>
            <img src={res.thumbnail_url} alt=""/>
            <p>{res.officetype}</p>
            <h4 className="price"><span style={{fontWeight: 500}}>Total: </span>${Math.round((res.price_week/7)*time)} for {time + " " + days}</h4>
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
          <h2>My Reservations</h2>
          <div className="upcoming-reservations">
            {reservations}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserAccount;
