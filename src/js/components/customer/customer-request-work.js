var React = require('react');
var RequestWork = require('../global/request-work.js');

var CustomerRequestWork = React.createClass({
  render: function(){
    return (
      <div className="">
        <h1> Request Work</h1>
        <RequestWork />
      </div>
    );
  }
});

module.exports = CustomerRequestWork;
