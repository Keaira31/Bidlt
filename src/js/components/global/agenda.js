var React = require('react');
var BigCalendar = require('react-big-calendar');
var moment = require('moment');
var events = require('../builder/event.js');
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

var Agenda = React.createClass({
  render: function(){

    return (
      <div className="agenda-overview main-padding margin-30 center-align">
        <div className="component-title-box">
          <h5>Agenda</h5>
        </div>
        <BigCalendar
          events={events}
          views={['agenda']}
          defaultView='agenda'
          defaultDate={new Date(2015, 3, 1)}
          style={{height: 550}}
        />
      </div>
    );
  }
});

module.exports = Agenda;
