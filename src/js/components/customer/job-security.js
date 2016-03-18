var React = require('react');
var ComingSoon = require('../global/coming-soon.js');

var JobSecurity = React.createClass({
  render: function(){
    return (
      <div className="">
        <ComingSoon pageName={"Job Security"} icon={'vpn_key'} />
      </div>
    );
  }
});

module.exports = JobSecurity;
