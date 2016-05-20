var React = require('react');
var Search = require('./Search/Search');
var HashHistory = require('react-router').hashHistory;

// var CloudinaryConfig = require('react-cloudinary').CloudinaryConfig;
// console.log(CloudinaryConfig);
// var CloudinaryVideo = require('react-cloudinary').CloudinaryVideo;
// console.log(CloudinaryVideo);
// cloudinaryConfig({ cloud_name: 'dyzqtq32z' });

var Home = React.createClass({
  getInitialState: function() {
    return {video: ""};
  },

  componentWillMount: function() {
    this.fetchVideo();
  },

  clickCity: function(coords) {
    HashHistory.push({
      pathname: "s/",
      query: coords
    });
  },

  fetchVideo: function() {
    this.setState({video: "http://res.cloudinary.com/dyzqtq32z/video/upload/ac_none/v1463730794/montage-work_wighhl.mp4"});
    // $.ajax({
    //   method: "GET",
    //   url: "http://res.cloudinary.com/dyzqtq32z/video/upload/ac_none/v1463730794/montage-work_wighhl.mp4",
    //   success: function(video) {
    //     // this.setState({video: video});
    //     console.log(video);
    //   }.bind(this),
    //   error: function(data) {
    //     console.log(data);
    //     al
    //     // ServerActions.handleError(data);
    //   }
    // });
  },

  render: function() {
    var por = {
      style: {backgroundImage: 'url(http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_350,w_400/v1462551923/POR_vzmzui.jpg)'},
      label: "Portland",
      action: function() { this.clickCity({lat: 45.5231, lng: -122.6765}); }.bind(this)
    };
    var la = {
      style: {backgroundImage: 'url(http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_350,w_400/v1462551920/LA_yt9zq6.jpg)'},
      label: "Los Angeles",
      action: function() { this.clickCity({lat: 34.0522, lng: -118.2437}); }.bind(this)
    };
    var sea = {
      style: {backgroundImage: 'url(http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_350,w_400/v1462551936/SEA_zyrucp.jpg)'},
      label: "Seattle",
      action: function() { this.clickCity({lat: 47.6062, lng: -122.3321}); }.bind(this)
    };
    var sf = {
      style: {backgroundImage: 'url(http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_350,w_400/v1462551929/SF_lktwqa.jpg)'},
      label: "San Francisco",
      action: function() { this.clickCity({lat: 37.7749, lng: -122.4194}); }.bind(this)
    };
    var nyc = {
      style: {backgroundImage: 'url(http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_350,w_400/v1462551922/NYC_vsnlar.jpg)'},
      label: "New York",
      action: function() { this.clickCity({lat: 37.7749, lng: -122.4194}); }.bind(this)
    };

    var chi = {
      style: {backgroundImage: 'url(http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_350,w_400/v1463594350/chicago-image-1_qm0dep.jpg)'},
      label: "Chicago",
      action: function() { this.clickCity({lat: 37.7749, lng: -122.4194}); }.bind(this)
    };

    return (
      <div className="homepage">
        <video crossorigin="anonymous"
          id="above-fold-background-video"
          autoPlay loop
          poster="http://res.cloudinary.com/dyzqtq32z/image/upload/c_scale,w_1920/v1463764488/screenshot-homepage_tma0vf.jpg"
          >
          <source src={this.state.video}/>
        </video>
        <div className="above-fold-text">
          <h1>WHEREVER WORK TAKES YOU</h1>
          <h2>Flexible-term office space for freelancers and teams.</h2>
        </div>

      <Search location={this.props.location.pathname}/>

      <div className="below-fold">
          <div className="homepage-section-one">
            <h3>Time is money. Save yours.</h3>
            <div className="graphics-gallery">
              <img className="graphics" src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1462574399/savings_lubtzw.png" alt=""/>
              <img className="graphics" src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1462574386/happy2_pvmdnt.png" alt=""/>
              <img className="graphics" src="http://res.cloudinary.com/dyzqtq32z/image/upload/v1462574376/time_noachj.png" alt=""/>
            </div>
          </div>
          <div className="homepage-section-two">
            <h3>Productivity Near You</h3>
            <div className="image-gallery">
              <div className="city-images"
                style={sf.style}
                alt={sf.label}
                onClick={sf.action}>
                <h1 className="city-label">{sf.label}</h1>
              </div>
              <div className="city-images"
                style={nyc.style}
                alt={nyc.label}
                onClick={nyc.action}>
                <h1 className="city-label">{nyc.label}</h1>
              </div>
              <div className="city-images"
                style={chi.style}
                alt={chi.label}
                onClick={chi.action}>
                <h1 className="city-label">{chi.label}</h1>
              </div>
              <div className="city-images"
                style={por.style}
                alt={por.label}
                onClick={por.action}>
                <h1 className="city-label">{por.label}</h1>
              </div>
              <div className="city-images"
                style={la.style}
                alt={la.label}
                onClick={la.action}>
                <h1 className="city-label">{la.label}</h1>
              </div>
              <div className="city-images"
                style={sea.style}
                alt={sea.label}
                onClick={sea.action}>
                <h1 className="city-label">{sea.label}</h1>
              </div>
            </div>
          </div>
          <div id="homepage-footer"></div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
