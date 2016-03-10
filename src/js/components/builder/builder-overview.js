var React = require('react');

var SideNav = require('../global/side-nav.js');


var BuilderOverview = React.createClass({

  render: function(){
    var navArr = [{name:'Overview',url:'/overview'}, {name:'Current Jobs',url:'/currentJobs'},{name:'Available Jobs',url:'/availableJobs'},{name:'Back Office',url:'/backOffice'},{name:'Wall',url:'/wall'},{name:'Search & Hire',url:'/seachHire'}, {name:'Safeguarding',url:'/safeguarding'}];

    return (
      <div className="">
        <SideNav navArray={navArr} />
      </div>
    );
  }
});

module.exports = BuilderOverview;
