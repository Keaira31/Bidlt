var React = require('react');
var OverviewCurrentJobs = require('./overview-current-jobs.js');
var OverviewGoogleMap = require('./overview-google-map.js');
var Agenda = require('../global/agenda.js');


var BuilderOverview = React.createClass({

  render: function(){
    return (
      <div className="overview-container">
        <div className="overview-jobs-container">
          <OverviewCurrentJobs />
        </div>
        <div className="overview-map-container top-margin">
          <OverviewGoogleMap />
        </div>
        <div className="overview-agenda-container top-margin">
          <Agenda />
        </div>
      </div>
    );
  }
});

module.exports = BuilderOverview;
