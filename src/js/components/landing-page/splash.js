var React = require('react');
var SignInModal = require('./sign-in-modal.js');

var Splash = React.createClass({
  componentDidMount(){
    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });
  },

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
            <a className="btn-large center-align interface-button modal-trigger" href="#sign-in-modal">SIGN IN</a>
          </div>
        </div>

        <div className="modal" id="sign-in-modal">
          <SignInModal />
        </div>


      </div>
    );
  }
});

module.exports = Splash;
