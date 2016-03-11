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
var BuilderTemplate = require('./components/builder/builder-template.js');
var BuilderOverview = require('./components/builder/builder-overview.js');
var BuilderCurrentJobs = require('./components/builder/current-jobs.js');
var AvailableJobs = require('./components/builder/available-jobs.js');

var CustomerOverview = require('./components/customer/customer-overview.js');
var SbspOverview = require('./components/sbsp/sbsp-overview.js');


var rootElement = document.getElementById('react_content_container');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/BuilderTemplate' component={BuilderTemplate}>
      <IndexRoute component={BuilderOverview}/>
      <Route path='CurrentJobs' component={BuilderCurrentJobs}/>
      <Route path='AvailableJobs' component={AvailableJobs}/>
    </Route>

    <Route path='/CustomerOverview' component={CustomerOverview} />
    <Route path='/SbspOverview' component={SbspOverview} />

  </Router>,
  rootElement
)
