var React = require('react');

var InterfaceIcon = React.createClass({
  render: function(){
    return (
      <div className="col s12 l4 interface-icon">
        <div>
          <p>{this.props.interface}</p>
        </div>
      </div>
    );
  }
});

module.exports = InterfaceIcon;
