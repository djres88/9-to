var React = require('react');
var Search = require('./Search/Search');

var Home = React.createClass({
  render: function() {
    return (
      <div className="homepage">
        <iframe id="above-fold-background"></iframe>
        <div className="above-fold-text">
          <h1>WHEREVER WORK TAKES YOU</h1>
          <h2>Find flexible-term office space for freelancers and teams.</h2>
        </div>
        <Search />
        <div className="homepage-section-one">
          <h3>TIME IS MONEY. SAVE IT.</h3>
          <p>Something about saving costs involved w/ finding/setting up a new office...</p>
        </div>
      </div>
    );
  }
});

module.exports = Home;
