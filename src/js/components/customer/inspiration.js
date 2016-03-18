var React = require('react');
var ComingSoon = require('../global/coming-soon.js');

var Inspiration = React.createClass({
  render: function(){
    return (
      <div className="">
        <ComingSoon pageName={"Inspiration"} icon={'star_border'}/>
      </div>
    );
  }
});

module.exports = Inspiration;
