var React = require('react');
var LandingHeader = require('./landing-header.js');
var Splash = require('./splash.js');
var InterfaceButtons = require('./interface-buttons.js');
var AboutUs = require('./about-us.js');
var LandingFooter= require('./landing-footer.js');


var LandingPage = React.createClass({
  render: function(){
    return (
      <div className="col s12 l12 landing-page">
        <LandingHeader />
        <Splash />
        <InterfaceButtons />
        <AboutUs />
        <LandingFooter />
      </div>
    );
  }
});

module.exports = LandingPage;
