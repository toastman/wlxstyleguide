var Link = require('react-router').Link;
module.exports = React.createClass({
  render: function() {
    return (
      <div>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Worklinx style guide</h1>
            <p className="lead">This is the first version of worklinx style guide.</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3 col-md-push-9 bd-sidebar">
              <ul>
                <li>
                  <Link to="/bootstrap">Bootstrap</Link>
                  <ul>
                    <li><Link to="/bootstrap/buttons">Buttons</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/kendoui">KendoUi</Link>
                  <ul>
                    <li><Link to="/kendoui/grid">Grid</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-9 col-md-pull-3 bd-content">
              {this.props.children}
            </div>
          </div>
        </div>

      </div>
    );
  }
});
