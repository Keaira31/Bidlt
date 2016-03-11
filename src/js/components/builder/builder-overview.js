var React = require('react');
var SideNav = require('../global/side-nav.js');
var Header = require('../global/header.js');
var OverviewCurrentJobs = require('./overview-current-jobs.js');
var OverviewGoogleMap = require('./overview-google-map.js');



var BuilderOverview = React.createClass({

  render: function(){
    var navArr = [{name:'Overview',url:'/overview', icon:'dashboard'}, {name:'Current Jobs',url:'/currentJobs', icon:'event'}, {name:'Available Jobs',url:'/availableJobs', icon: 'work'},{name:'Back Office',url:'/backOffice', icon: 'receipt'},{name:'Wall',url:'/wall', icon:'chat_bubble_outline'},{name:'Search & Hire',url:'/seachHire', icon: 'build'}, {name:'Safeguarding',url:'/safeguarding', icon: 'thumb_up'}];


    return (
      <div className="">
        <SideNav navArray={navArr} interface={'BILDT: Builder'}/>
        <Header name={"Sohil's Company"} address={'14 Palmers Road, Mile End, London'}/>
        <OverviewCurrentJobs />
        <OverviewGoogleMap />
      </div>
    );
  }
});

module.exports = BuilderOverview;
