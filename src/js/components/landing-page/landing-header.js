var React = require('react');

var LandingHeader = React.createClass({
  componentDidMount(){
    $(".button-collapse").sideNav();
  },

  render: function(){
    return (
      <div className="landing-header">
        <nav>
          <div className='nav-wrapper'>
            <a href="#" className='brand-logo'>BIDLT</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">SIGN IN</a></li>
            </ul>

            <ul className="side-nav" id="mobile-demo">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">SIGN IN</a></li>
            </ul>

          </div>
        </nav>

      </div>
    );
  }
});

module.exports = LandingHeader;
