var React = require('react');

var Splash = React.createClass({
  render: function(){
    return (
      <div className="splash">

        <div className="row">
          <div className="col l4 offset-l4 m4 offset-m4 offset-s1 s10 center central-icon">
            <h2 className="splash-title">BIDLT</h2>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col l4 offset-l4 m4 offset-m4 offset-s1 s10 center">
            <a className="btn-large center-align interface-button">SIGN IN</a>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Splash;
