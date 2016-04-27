var React = require('react');

var SignUpForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"/>
        <input type="submit"/>
      </form>
    );
  }
});

module.exports = SignUpForm;
