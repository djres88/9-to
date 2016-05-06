var React = require('react');
// var Dates = require('./Dates');
var FilterActions = require('../../actions/FilterActions');
var ReactSlider = require('react-slider');
var HashHistory = require('react-router').hashHistory;
var moment = require('moment');

// TODO: All this needs to do is listen to a FILTER store that updates (selects) workspaces that the WorkspaceIndex has retrieved.
var FilterParams = React.createClass({
  getInitialState: function() {
    return {
      location: "",
      capacity: 1,
      office_types: { "Coworking Space": true, "Private Office": true, "Home Office": true },
      min: 0,
      max: 100
    };
  },

  updateOfficeType: function(e) {
    var that = this;

    Object.keys(this.state.office_types).forEach(function(type) {
      if (type === e.currentTarget.value) {
        var office_types = that.state.office_types;
        if (that.state.office_types[type] === true) {
          office_types[type] = false;
          that.setState({office_types: office_types});
        } else {
          office_types[type] = true;
          that.setState({office_types: office_types});
        }
      }
    });

    var newTypes = [];
    Object.keys(this.state.office_types).forEach(function(type) {
      if (that.state.office_types[type]) {
        newTypes.push(type);
      }
    });

    FilterActions.updateOfficeType(newTypes);
  },

  updateCapacity: function(e) {
    this.setState({capacity: e.target.value});
    FilterActions.updateCapacity(e.target.value);
    console.log(e.target.value);
  },
  //
  // updateBeginDate: function(beginDate) {
  //   end = window.endDate;
  //   if (beginDate._d > end._d) {
  //     alert("End date cannot occur before start date.");
  //   } else {
  //     window.beginDate = beginDate;
  //   }
  //   this.setState({beginDate: beginDate.format("MM/DD/YYY")});
  // },
  //
  // updateEndDate: function(endDate) {
  //   begin = window.beginDate;
  //   if (endDate._d < begin._d) {
  //     alert("End date cannot occur before start date.");
  //   } else {
  //     window.endDate = endDate;
  //   }
  //   this.setState({endDate: endDate.format("MM/DD/YYY")});
  // },

  updatePrices: function(prices) {
    this.setState({min: prices[0], max: prices[1]});
    var adjustedPrices = [prices[0] * 10, prices[1] * 10];
    FilterActions.updatePrices(adjustedPrices);
  },

  //TODO: Add back in when reservations are fully functional.
  // <li>
  //   <h4>Dates</h4>
  //   <Dates date={window.beginDate} action={this.updateBeginDate} placeholder="Start Date"/>
  //   <Dates date={window.endDate} action={this.updateEndDate} placeholder="End Date"/>
  // </li>
  render: function() {
    return (
      <div className="search-params">
        <ul>
          <hr/>
          <li>
            <h4>Capacity</h4>
              Spaces Needed:
              <select
                value={this.state.capacity}
                onChange={this.updateCapacity}
                className="capacity-dropdown">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
          </li>
          <hr/>
          <li>
            <h4>Office Type</h4>
              <label>Coworking Space
                <input className="office-type" onChange={this.updateOfficeType} type="checkbox" value="Coworking Space" checked={this.state.office_types["Coworking Space"] === true}/>
              </label>
              <label>Private Office
                <input className="office-type" onChange={this.updateOfficeType} type="checkbox" value="Private Office" checked={this.state.office_types["Private Office"]}/>
              </label>
              <label>Home Office
                <input className="office-type" onChange={this.updateOfficeType} type="checkbox" value="Home Office" checked={this.state.office_types["Home Office"]}/>
              </label>
          </li>
          <hr/>
          <li>
            <h4>Price Per Week</h4>
              <ReactSlider onAfterChange={this.updatePrices} withBars defaultValue={[this.state.min, this.state.max]} className="slider">
                <div id="left-handle" className="my-handle">{this.state.min*10}</div>
                <div id="right-handle" className="my-handle">{this.state.max*10 + "+"}</div>
              </ReactSlider>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = FilterParams;
// <div class="list">
//   <div class="item range range-positive">
//     <input type="range" name="volume" min="0" max="100" value="33"/>
//     <input type="range" name="volume" min="0" max="100" value="33"/>
//   </div>
// </div>
