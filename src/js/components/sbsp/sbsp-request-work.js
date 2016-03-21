var React = require('react');
var RequestWork = require('../global/request-work.js');

var SBSPRequestWork = React.createClass({
  render: function(){
    return (
      <div className="main-padding">
        <RequestWork />
      </div>
    );
  }
});

module.exports = SBSPRequestWork;
