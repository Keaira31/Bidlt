var React = require('react');
var InterfaceIcon = require('./interface-icon.js');

var Splash = React.createClass({
  render: function(){
    return (
      <div className="col l12 s12 splash">
        <div className="row">
          <InterfaceIcon interface={'CUSTOMER'}/>
          <InterfaceIcon interface={'BUILDER'}/>
          <InterfaceIcon interface={'SBSP'}/>
        </div>

        <div className="col l12 s12 central-icon">
          <h2>BILDT</h2>
        </div>

        <div className="row">
          <InterfaceIcon interface={'PROJECT'}/>
          <InterfaceIcon interface={'LEASE'}/>
          <InterfaceIcon interface={'SUPPLIER'}/>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
