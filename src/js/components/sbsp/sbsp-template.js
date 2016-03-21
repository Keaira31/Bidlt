var React = require('react');
var SideNav = require('../global/side-nav.js');
var Header = require('../global/header.js');
var Footer = require('../global/footer.js');


var BuilderTemplate = React.createClass({

  render: function(){
    var navArr = [{name:'Overview',url:'/SBSPTemplate', icon:'dashboard'}, {name:'Current Jobs',url:'/SBSPTemplate/CurrentJobs', icon:'event'}, {name:'Tasks',url:'/SBSPTemplate/Tasks', icon:'list'}, {name:'Request Work',url:'/SBSPTemplate/RequestWork', icon: 'open_in_browser'},{name:'Back Office',url:'/SBSPTemplate/BackOffice', icon: 'receipt'},{name:'Wall',url:'/SBSPTemplate/Wall', icon:'chat_bubble_outline'},{name:'Search & Hire',url:'/SBSPTemplate/SearchHire', icon: 'build'}, {name:'Compliance',url:'/SBSPTemplate/Compliance', icon: 'library_books'}];
    console.log("rendering builder template");

    return (
      <div className="">
        <SideNav navArray={navArr} interface={'BIDLT: SBSP'}/>
        <Header name={"SBSP Company"} address={'143 Commercial Street, London'}/>
        {this.props.children}
        <Footer />

      </div>
    );
  }
});

module.exports = BuilderTemplate;
