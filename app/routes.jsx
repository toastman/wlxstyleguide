var Route = require('react-router').Route;
var Link = require('react-router').Link;

module.exports = (
  <Route path="/" name="root" component={require("./layout.jsx")}>
    <Route path="/bootstrap" component={require("./bootstrap")}>
      <Route path="/bootstrap/buttons" component={require("./bootstrap/buttons")} />
    </Route>
    <Route path="/kendoui" component={require("./kendoui")}>
      <Route path="/kendoui/grid" component={require("./kendoui/grid")} />
    </Route>
  </Route>
);
