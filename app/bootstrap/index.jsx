module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Bootstrap components</h1>
        {this.props.children}
      </div>
    );
  }
});
