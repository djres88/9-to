var React = require('react');

var SearchParams = React.createClass({
  render: function() {
    return (
      <div className="search-params">
        <ul>
          <li>
            <h4>Dates</h4>
            <p>Date Field1</p>
            <p>Date Field2</p>
          </li>
          <hr/>
          <li>
            <h4>Capacity</h4>
            <p>Dropdown</p>
          </li>
          <hr/>
          <li>
            <h4>Office Type</h4>
            <p>Radio1</p>
            <p>Radio2</p>
            <p>Radio3</p>
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
