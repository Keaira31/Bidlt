var React = require('react');
var Tasks = require('../global/tasks.js');

var CustomerTasks = React.createClass({
  render: function(){
    return (
      <div className="main-padding margin-30">
        <Tasks />
      </div>
    );
  }
});

module.exports = CustomerTasks;
