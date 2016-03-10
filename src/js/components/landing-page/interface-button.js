var React = require('react');
var Link = require('react-router').Link;
var InterfaceButton = React.createClass({
  render: function(){
    return (
      <div className="col s12 l4">
        <Link to={{pathname: this.props.url}} className="primary-color waves-effect hover-color waves-light btn-large interface-button ">{this.props.title}</Link>
      </div>
    );
  }
});

module.exports = InterfaceButton;
