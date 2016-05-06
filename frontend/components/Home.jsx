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
            <div className="graphics-gallery">
              <img className="graphics" src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1462574399/savings_lubtzw.png" alt=""/>
              <img className="graphics" src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1462574386/happy2_pvmdnt.png" alt=""/>
              <img className="graphics" src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1462574376/time_noachj.png" alt=""/>
            </div>
          </div>
          <div className="homepage-section-two">
            <h3>Productivity Near You</h3>
            <div className="image-gallery">
              <img className="city-images" src="http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_700,w_1000/v1462551923/POR_vzmzui.jpg" alt=""/>
              <img className="city-images" src="http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_700,w_1000/v1462551920/LA_yt9zq6.jpg" alt=""/>
              <img className="city-images" id="nyc-image" src="http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_700,w_1000/v1462551936/SEA_zyrucp.jpg" alt=""/>
              <img className="city-images" id="nyc-image" src="http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_700,w_1000/v1462551929/SF_lktwqa.jpg" alt=""/>
            </div>
          </div>
          <div id="homepage-footer"></div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
