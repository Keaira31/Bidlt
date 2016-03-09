var React = require('react');

var InterfaceIcon = React.createClass({
  render: function(){
    return (
      <div className="col s12 l4 interface-icon">
        <div className="interface-circle">
          <p>{this.props.interface}</p>
        </div>
      </div>
    );
  }
});

module.exports = InterfaceIcon;
