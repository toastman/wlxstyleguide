'use strict';

// Add all scss files in final bundle
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./', true, /\.scss$/));

var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./routes.jsx');

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('appRoot'));
