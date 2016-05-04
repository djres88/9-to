var React = require('react');
var Dates = require('./Dates');

var SearchParams = React.createClass({
  getInitialState: function() {
    return {location: "", capacity: 1, office_types: ["Coworking Space", "Private Office", "Home Office"]};
  },

  updateOfficeType: function(e) {
    // e.preventDefault();
    // console.log(e.currentTarget);
  },

  render: function() {
    return (
      <div className="search-params">
        <ul>
          <li>
            <h4>Dates</h4>
            <Dates placeholder="Start Date"/>
            <Dates placeholder="End Date"/>
          </li>
          <hr/>
          <li>
            <h4>Capacity</h4>
              Spaces Needed:
              <select className="capacity-dropdown">
                <option onChange={this.getCapacity}>1</option>
                <option onChange={this.getCapacity}>2</option>
                <option onChange={this.getCapacity}>3</option>
                <option onChange={this.getCapacity}>4</option>
                <option onChange={this.getCapacity}>5+</option>
              </select>
          </li>
          <hr/>
          <li>
            <h4>Office Type</h4>
              <label>Coworking Space
                <input onChange={this.updateOfficeType} type="checkbox" value="Coworking" checked/>
              </label>
              <label>Private Office
                <input onChange={this.updateOfficeType} type="checkbox" value="Private Office" checked/>
              </label>
              <label>Home Office
                <input onChange={this.updateOfficeType} type="checkbox" value="Home Office" checked/>
              </label>
          </li>
          <hr/>
          <li>
            <h4>Price</h4>
            <p>Slider</p>
          </li>
        </ul>

      </div>
    );
  }
});

module.exports = SearchParams;
