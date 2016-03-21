var React = require('react');
var RequestWork = require('../global/request-work.js');

var CustomerRequestWork = React.createClass({
  render: function(){
    return (
      <div className="main-padding">
        <RequestWork />
      </div>
    );
  }
});

module.exports = CustomerRequestWork;
