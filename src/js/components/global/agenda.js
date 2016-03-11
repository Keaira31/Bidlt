var React = require('react');
var BigCalendar = require('react-big-calendar');
var moment = require('moment');
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

var Agenda = React.createClass({
  render: function(){

    return (
      <div className="agenda-overview main-padding margin-30">
        <h5>Agenda</h5>
        <BigCalendar
          events={[{
            "title" : "All Day Event",
            "allDay": true,
            "start" : new Date(2016, 3, 11),
            "end" : new Date(2016, 3, 11)
          },
          {
            "title" : "Sohil Day",
            "start" : new Date(2016, 2, 12, 12),
            "end" : new Date(2016, 2, 12, 13)
          }
        ]}
          views={['agenda']}
          view={'agenda'}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    );
  }
});

module.exports = Agenda;
