var React = require('react');
var SideNav = require('../global/side-nav.js');
var Header = require('../global/header.js');
var Footer = require('../global/footer.js');


var CustomerTemplate = React.createClass({

  render: function(){
    var navArr = [{name:'Current Work',url:'/CustomerTemplate', icon:'event'}, {name:'Tasks',url:'/CustomerTemplate/CustomerTasks', icon:'list'}, {name:'Request Work',url:'/CustomerTemplate/RequestWork', icon: 'open_in_browser'},{name:'Inspiration',url:'/CustomerTemplate/Inspiration', icon: 'star_border'},{name:'Advice',url:'/CustomerTemplate/Advice', icon:'people_outline'},{name:'Job Security',url:'/CustomerTemplate/JobSecurity', icon: 'vpn_key'}];
    console.log("rendering customer template");

    return (
      <div className="">
        <SideNav navArray={navArr} interface={'BILDT: Customer'}/>
        <Header name={"Sarah's House Build"} address={'23 Bricklane, Aldgate, London'}/>
        {this.props.children}
        <Footer />

      </div>
    );
  }
});

module.exports = CustomerTemplate;
