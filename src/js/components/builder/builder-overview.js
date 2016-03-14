var React = require('react');
var OverviewCurrentJobs = require('./overview-current-jobs.js');
var OverviewGoogleMap = require('./overview-google-map.js');
var Agenda = require('../global/agenda.js');


var BuilderOverview = React.createClass({

  render: function(){
    return (
      <div className="">
        <OverviewCurrentJobs />
        <OverviewGoogleMap />
        <Agenda />
      </div>
    );
  }
});

module.exports = BuilderOverview;
