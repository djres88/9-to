var React = require('react');

var SearchLocationsBar = React.createClass({

  render: function() {
    return (
      <div className="searchbar">
        <input id="search-field-text" placeholder="Location" className="search-field" type="text" value={this.props.value} onChange={this.props.action}/>
        <ul display="none">
          {LocationMatches}
        </ul>
      </div>
    );
  }

});

module.exports = SearchLocationsBar;
