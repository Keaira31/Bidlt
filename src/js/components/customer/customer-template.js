var React = require('react');
var SideNav = require('../global/side-nav.js');
var Header = require('../global/header.js');
var Footer = require('../global/footer.js');


var CustomerTemplate = React.createClass({

  render: function(){
    var navArr = [{name:'Current Work',url:'/CustomerTemplate', icon:'dashboard'}, {name:'Tasks',url:'/CustomerTemplate/CustomerTasks', icon:'event'}, {name:'Request Work',url:'/CustomerTemplate/RequestWork', icon: 'work'},{name:'Inspiration',url:'/CustomerTemplate/Inspiration', icon: 'receipt'},{name:'Advice',url:'/CustomerTemplate/Advice', icon:'chat_bubble_outline'},{name:'Job Security',url:'/CustomerTemplate/JobSecurity', icon: 'build'}];
    console.log("rendering customer template");

    return (
      <div className="">
        <SideNav navArray={navArr} interface={'BILDT: Builder'}/>
        <Header name={"Sarah's House Build"} address={'23 Bricklane, Aldgate, London'}/>
        {this.props.children}
        <Footer />

      </div>
    );
  }
});

module.exports = CustomerTemplate;
