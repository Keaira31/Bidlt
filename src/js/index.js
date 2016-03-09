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
var rootElement = document.getElementById('react_content_container');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>,
  rootElement
)
