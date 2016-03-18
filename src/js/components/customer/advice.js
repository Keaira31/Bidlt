var React = require('react');
var ComingSoon = require('../global/coming-soon.js');

var Advice = React.createClass({
  render: function(){
    return (
      <div className="">
        <ComingSoon pageName={"Advice"} icon={'people_outline'}/>
      </div>
    );
  }
});

module.exports = Advice;
