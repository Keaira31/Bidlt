var React = require('react');
var LandingPage = require('./landing-page/landing-page.js');

var App = React.createClass({
  render: function() {
    return (
    <div>
      <LandingPage />
    </div>
    )
  }
});

module.exports = App;
