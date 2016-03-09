var React = require('react');
var LandingHeader = require('./landing-header.js');
var Splash = require('./splash.js');

var LandingPage = React.createClass({
  render: function(){
    return (
      <div className="col s12 l12 landing-page">
        <LandingHeader />
        <Splash />
      </div>
    );
  }
});

module.exports = LandingPage;
