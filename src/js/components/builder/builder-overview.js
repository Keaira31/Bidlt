var React = require('react');
var SideNav = require('../global/side-nav.js');
var Header = require('../global/header.js');

var BuilderOverview = React.createClass({

  render: function(){
    var navArr = [{name:'Overview',url:'/overview', icon:'dashboard'}, {name:'Current Jobs',url:'/currentJobs', icon:'event'}, {name:'Available Jobs',url:'/availableJobs', icon: 'work'},{name:'Back Office',url:'/backOffice', icon: 'receipt'},{name:'Wall',url:'/wall', icon:'chat_bubble_outline'},{name:'Search & Hire',url:'/seachHire', icon: 'build'}, {name:'Safeguarding',url:'/safeguarding', icon: 'thumb_up'}];
    var mainDate = new Date();
    var month = mainDate.getUTCMonth() + 1;
    var day = mainDate.getDate();
    var year = mainDate.getFullYear();
    var newDate = day + '/' + month + '/' + year;

    return (
      <div className="">
        <SideNav navArray={navArr} />
        <Header name={"Sohil's Company"} date={newDate} address={'14 Palmers Road, Mile End, London'}/>
      </div>
    );
  }
});

module.exports = BuilderOverview;
