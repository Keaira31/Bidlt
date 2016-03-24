var React = require('react');

var LandingHeader = React.createClass({
  componentDidMount(){
    $(".button-collapse").sideNav();

    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });

    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

  },

  render: function(){
    return (
      <div className="landing-header">
        <nav className='primary-color'>
          <div className='nav-wrapper'>
            <a href="#" className='brand-logo primary-color'>BIDLT</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a className="modal-trigger" href="#modal1">SIGN IN</a></li>
            </ul>

            <ul className="side-nav" id="mobile-demo">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a className="modal-trigger" href="#modal1">SIGN IN</a></li>
            </ul>

          </div>
        </nav>

        <div className="modal" id="modal1">
          <div className="modal-content">

            <h4 className="center">Sign In</h4>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" />
                <label className="active">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" />
                <label className="active">Password</label>
              </div>
            </div>

            <div className="modal-footer">
                <a className="modal-action modal-close btn center primary-color waves-effect hover-color waves-light">Sign In</a>
            </div>

          </div>
        </div>

      </div>
    );
  }
});

module.exports = LandingHeader;
