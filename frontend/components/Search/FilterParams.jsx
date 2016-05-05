var React = require('react');
var Dates = require('./Dates');
var FilterActions = require('../../actions/FilterActions');

// TODO: All this needs to do is listen to a FILTER store that updates (selects) workspaces that the WorkspaceIndex has retrieved.
var FilterParams = React.createClass({
  getInitialState: function() {
    return {location: "", capacity: 1, office_types: ["Coworking Space", "Private Office", "Home Office"], beginDate: null, endDate: null};
  },

  updateOfficeType: function(e) {
    if (e.currentTarget.checked) {
      this.state.office_types.push(e.currentTarget.value);
    } else {
      
    }
    debugger;
    FilterActions.updateOfficeType(this.state.office_types);
  },

  updateCapacity: function(e) {
    this.setState({capacity: e.target.value});
    FilterActions.updateCapacity(this.state.capacity);
  },

  updateBeginDate: function(date) {
    end = this.state.endDate;
    if (end && date._d > end._d) {
      alert("End date cannot occur before start date.");
    } else {
      this.setState({
        beginDate: date
      });
      FilterActions.updateBeginDate(this.state.beginDate);
    }
  },

  updateEndDate: function(date) {
    begin = this.state.beginDate;
    if (begin && date._d < begin._d) {
      alert("End date cannot occur before start date.");
    } else {
      this.setState({
        endDate: date
      });
      FilterActions.updateEndDate(this.state.endDate);
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
                <input className="office-type" onChange={this.updateOfficeType} type="checkbox" value="Coworking" checked/>
              </label>
              <label>Private Office
                <input className="office-type" onChange={this.updateOfficeType} type="checkbox" value="Private Office" checked/>
              </label>
              <label>Home Office
                <input className="office-type" onChange={this.updateOfficeType} type="checkbox" value="Home Office" checked/>
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
