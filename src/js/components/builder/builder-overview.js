var React = require('react');

var SideNav = require('../global/side-nav.js');


var BuilderOverview = React.createClass({

  render: function(){
    var navArr = [{name:'Overview',url:'/overview', icon:'dashboard'}, {name:'Current Jobs',url:'/currentJobs', icon:'event'}, {name:'Available Jobs',url:'/availableJobs', icon: 'work'},{name:'Back Office',url:'/backOffice', icon: 'receipt'},{name:'Wall',url:'/wall', icon:'chat_bubble_outline'},{name:'Search & Hire',url:'/seachHire', icon: 'build'}, {name:'Safeguarding',url:'/safeguarding', icon: 'thumb_up'}];

    return (
      <div className="">
        <SideNav navArray={navArr} />
      </div>
    );
  }
});

module.exports = BuilderOverview;
