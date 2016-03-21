var React = require('react');
var Agenda = require('../global/agenda.js');
var CalendarMonthView = require('../global/calendar-month-view.js');

var CurrentWork = React.createClass({
  render: function(){
    return (
      <div className="">
        <div className="customer-current-work">
          <Agenda />
          <CalendarMonthView />
        </div>
      </div>
    );
  }
});

module.exports = CurrentWork;
