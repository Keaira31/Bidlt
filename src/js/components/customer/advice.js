var React = require('react');
var ComingSoon = require('../global/coming-soon.js');

var Advice = React.createClass({
  render: function(){
    return (
      <div className="">
        <ComingSoon pageName={"Sohil's Company"} icon={}/>
        <h1>Inspiration</h1>
      </div>
    );
  }
});

module.exports = Advice;
