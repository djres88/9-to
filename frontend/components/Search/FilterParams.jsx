var React = require('react');
var Dates = require('./Dates');
var FilterActions = require('../../actions/FilterActions');

// TODO: All this needs to do is listen to a FILTER store that updates (selects) workspaces that the WorkspaceIndex has retrieved.
var FilterParams = React.createClass({
  getInitialState: function() {
    return {
      location: "",
      capacity: 1,
      office_types: { "Coworking Space": true, "Private Office": true, "Home Office": true },
      beginDate: null,
      endDate: null
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

  updateBeginDate: function(date) {
    end = this.state.endDate;
    if (end && date._d > end._d) {
      alert("End date cannot occur before start date.");
    } else {
      FilterActions.updateBeginDate(date);
      this.setState({
        beginDate: date
      });
    }
  },

  updateEndDate: function(date) {
    begin = this.state.beginDate;
    if (begin && date._d < begin._d) {
      alert("End date cannot occur before start date.");
    } else {
      FilterActions.updateEndDate(date);
      this.setState({
        endDate: date
      });
    }
  },

  render: function() {
    return (
      <div className="search-params">
        <ul>
          <li>
            <h4>Dates</h4>
            <Dates date={this.state.beginDate} action={this.updateBeginDate} placeholder="Start Date"/>
            <Dates date={this.state.endDate} action={this.updateEndDate} placeholder="End Date"/>
          </li>
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
            <h4>Price</h4>
            <p>Slider</p>
          </li>
        </ul>

      </div>
    );
  }
});

module.exports = FilterParams;
