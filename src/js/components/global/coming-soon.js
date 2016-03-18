var React = require('react');

var ComingSoon = React.createClass({
  render: function(){
    return (
      <div className="row">
      <div className="push-footer-to-bottom main-padding margin-30">
        <div className="col s12 l12 z-depth-1">
        <h3 className="center-align">{this.props.pageName}</h3>
          <div className="center-align">
            <i className="material-icons large darkest-text-color">this.props.icon</i>
          </div>
        <h5 className="center-align">Coming Soon</h5>
        </div>

      </div>
      </div>
    );
  }
});

module.exports = ComingSoon;
