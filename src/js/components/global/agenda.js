var React = require('react');
var BigCalendar = require('react-big-calendar');
var moment = require('moment');
import events from '../builder/event.js'
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

var Agenda = React.createClass({
  render: function(){

    return (

      <div className="agenda-overview main-padding margin-30">
        <h5>Agenda</h5>
        <BigCalendar
          events={events}
          views={['agenda']}
          defaultView='agenda'
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    );
  }
});

module.exports = Agenda;
