var React = require('react');
var Search = require('./Search');

var Home = React.createClass({
  render: function() {
    return (
      <div className="homepage">
        <iframe id="above-fold-background"></iframe>
        <div className="above-fold-text">
          <h1>ROOM TO GROW</h1>
          <h2>Flexible office space for wherever work takes you.</h2>
        </div>
        <Search />
      </div>
    );
  }
});

module.exports = Home;
