var React = require('react');
var BigCalendar = require('react-big-calendar');
var moment = require('moment');
var events = require('../builder/event.js');
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

var Agenda = React.createClass({

  getInitialState: function() {
       return { showAgenda: true };
  },

  onClick: function() {
    if (this.state.showAgenda === true) {
      this.setState({ showAgenda: false });
    } else {
      this.setState({ showAgenda: true });
    }
  },

  render: function(){

    return (
    <div className="row">
      <div className="agenda-overview main-padding margin-30 center-align agenda-view ">
        <div className="component-title-box" onClick={this.onClick}>
          <h5>Today's Agenda<i className="material-icons right">expand_less</i></h5>
        </div>
        { this.state.showAgenda ?

            <BigCalendar
              events={events}
              views={['day']}
              defaultView={'day'}
              defaultDate={new Date(2015, 3, 1)}
              style={{height: 400}}
            /> : null}

      </div>
    </div>
    );
  }
});

module.exports = Agenda;
