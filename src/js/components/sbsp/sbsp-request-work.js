var React = require('react');
var RequestWork = require('../global/request-work.js');

var SBSPRequestWork = React.createClass({
  render: function(){
    return (
      <div className="">
        <h1> SBPS Request Work</h1>
        <RequestWork />
      </div>
    );
  }
});

module.exports = SBSPRequestWork;
