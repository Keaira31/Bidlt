var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
      <div className="row header main-padding darkest-colour">
        <div className="company-name col s12 l4 left-align hide-on-med-and-down"><p>{this.props.name}</p></div>
        <div className="date col s12 l4 center-align"><p>{this.props.date}</p></div>
        <div className="address col s12 l4 right-align hide-on-med-and-down"><p>{this.props.address}</p></div>
      </div>
    );
  }
});

module.exports = Header;
