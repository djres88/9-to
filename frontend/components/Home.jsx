var React = require('react');
var Search = require('./Search');

var Home = React.createClass({
  render: function() {
    return (
      <div class="">
        <iframe id="above-fold-background"></iframe>
        <Search />
      </div>
    );
  }
});

module.exports = Home;
