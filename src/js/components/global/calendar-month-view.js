var React = require('react');
var BigCalendar = require('react-big-calendar');
var moment = require('moment');
var events = require('../builder/event.js');
require('react-big-calendar/lib/css/react-big-calendar.css');
require('../../../css/calendar.css');


BigCalendar.momentLocalizer(moment);

var CalendarMonthView = React.createClass({
  componentDidMount(){

    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });
  },

  getInitialState: function() {
       return { showMonth: true };
  },

  onClickMonth: function() {
    if (this.state.showMonth === true) {
      this.setState({ showMonth: false });
    } else {
      this.setState({ showMonth: true });
    }
  },


  modalView: function(jobObject) {
    var jobDate = (jobObject.start).toString().slice(0, 15);
    var startTime = (jobObject.start).toString().slice(16, 21);
    var endTime = (jobObject.end).toString().slice(16, 21);

    $('#job-detail').openModal();
    $('.calendar-job-title').html(jobObject.title);
    $('.calendar-job-date').html(jobDate);
    $('.calendar-job-time').html('Time: ' + startTime + ' - ' + endTime);
    $('.calendar-job-description').html(jobObject.desc);
  },

  render: function(){

    return (
  <div>
    <div className="row">
      <div className=" calendar-large-view main-padding margin-30 center-align">
        <div className="component-title-box" onClick={this.onClickMonth}>
          <h5>Month View</h5>
        </div>
        { this.state.showMonth ?
        <BigCalendar
          selectable
          events={events}
          views={['month', 'week']}
          defaultView='month'
          defaultDate={new Date(2015, 3, 1)}
          onSelectEvent={event => this.modalView(event)}
          style={
            {height: 900}
          }
        /> : null}
      </div>
    </div>


      <div className="modal" id="job-detail">
          <div className="modal-content">
            <h4 className="calendar-job-title center"></h4>
              <div className="calendar-job-content-box">
                <div className="chip calendar-job-date primary-color"></div>
                <div className="chip calendar-job-time secondary-color"></div>
                <p className="calendar-job-description"></p>
              </div>


            <div className="modal-footer">
                <a className="modal-action modal-close btn-flat center waves-effect hover-color waves-light">Close</a>
            </div>
          </div>
      </div>
    </div>


    );
  }
});

module.exports = CalendarMonthView;
