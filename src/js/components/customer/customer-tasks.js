var React = require('react');
var Tasks = require('../global/tasks.js');

var CustomerTasks = React.createClass({
  render: function(){
    return (
      <div className="">
        <Tasks />
      </div>
    );
  }
});

module.exports = CustomerTasks;
