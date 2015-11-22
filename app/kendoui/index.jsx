module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>KendoUI components</h1>
        {this.props.children}
      </div>
    );
  }
});
