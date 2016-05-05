var React = require('react');
var Search = require('./Search/Search');

var Home = React.createClass({
  render: function() {
    return (
      <div className="homepage">
        <div id="above-fold-background"></div>
        <div className="above-fold-text">
          <h1>WHEREVER WORK TAKES YOU</h1>
          <h2>Flexible-term office space for freelancers and teams.</h2>
        </div>

        <Search location={this.props.location.pathname}/>

      <div className="below-fold">
          <div className="homepage-section-one">
            <h3>Time is money. Save it.</h3>
            <p>Something about saving costs involved w/ finding/setting up a new office...</p>
            <div className="image-gallery">
              <img class="" src="" alt=""/>
              <img class="" src="" alt=""/>
              <img class="" src="" alt=""/>
            </div>
          </div>
          <div className="homepage-section-two">
            <h3>Productivity Near You</h3>
            <p>City guides?</p>
            <div className="image-gallery">
              <img class="" src="" alt=""/>
              <img class="" src="" alt=""/>
              <img class="" src="" alt=""/>
            </div>
          </div>
          <div className="homepage-section-three">
            <h3>Some kinda gallery!</h3>
            <p>hmmmmdaf adsfdasfdsadas</p>
            <div className="image-gallery">
              <img class="" src="" alt=""/>
              <img class="" src="" alt=""/>
              <img class="" src="" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
