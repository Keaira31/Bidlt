var React = require('react');
var Agenda = require('../global/agenda.js');
var CalendarMonthView = require('../global/calendar-month-view.js');


var CurrentJobs = React.createClass({
  render: function(){
    return (
      <div className="sbsp-current-jobs">
        <Agenda />
        <CalendarMonthView />
      </div>
    );
  }
});

module.exports = CurrentJobs;
