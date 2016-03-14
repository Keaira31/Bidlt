var React = require('react');
var Agenda = require('../global/agenda.js');

var CurrentJobs = React.createClass({
  render: function(){
    return (
      <div className="builder-current-jobs">
        <Agenda />
      </div>
    );
  }
});

module.exports = CurrentJobs;
