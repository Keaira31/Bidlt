var React = require('react');

var InterfaceButton = React.createClass({
  render: function(){
    return (
      <div className="col s12 l4">
        <a className="primary-color waves-effect hover-color waves-light btn-large interface-button ">{this.props.title}</a>
      </div>
    );
  }
});

module.exports = InterfaceButton;
