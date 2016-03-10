'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

require('../css/index.js');


var App = require('./components/app.js');
var BuilderOverview = require('./components/builder/builder-overview.js');
var CustomerOverview = require('./components/customer/customer-overview.js');
var SbspOverview = require('./components/sbsp/sbsp-overview.js');


var rootElement = document.getElementById('react_content_container');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/BuilderOverview' component={BuilderOverview} />
    <Route path='/CustomerOverview' component={CustomerOverview} />
    <Route path='/SbspOverview' component={SbspOverview} />

  </Router>,
  rootElement
)
