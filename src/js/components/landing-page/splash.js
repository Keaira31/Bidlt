var React = require('react');

var Splash = React.createClass({
  render: function(){
    return (
      <div className="splash">

        <div className="row">
          <div className="col l4 offset-l4 m6 offset-m3 offset-s1 s10 center central-icon">
            <h2 className="splash-title">BIDLT</h2>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col l12 s12">
            <h3 className="splash-intro">I am a</h3>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Splash;
