var React = require('react');
var ComingSoon = require('../global/coming-soon.js');

var Safeguarding = React.createClass({
  render: function(){
    return (
      <div className="">
        <ComingSoon pageName={"Safeguarding"} icon={'thumb_up'}/>
      </div>
    );
  }
});


module.exports = Safeguarding;
