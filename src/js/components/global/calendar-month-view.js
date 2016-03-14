var React = require('react');
var BigCalendar = require('react-big-calendar');
var moment = require('moment');
var events = require('../builder/event.js');
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

var CalendarMonthView = React.createClass({
  render: function(){

    return (
      <div className=" main-padding margin-30 center-align">
        <div className="component-title-box">
          <h5>Month View</h5>
        </div>
        <BigCalendar
          selectable
          events={events}
          views={['month']}
          defaultView='month'
          defaultDate={new Date(2015, 3, 1)}
          style={{height: 650}}
        />
      </div>
    );
  }
});

module.exports = CalendarMonthView;
