var React = require('react');

var LandingFooter = React.createClass({
  render: function(){
    return (
      <div className="landing-footer main-padding">
        <footer className='page-footer'>
          <div className='footer-copyright primary-color'>
            <div className='container'>
              2016 BIDLT
              <a className='right'>CONTACT US</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = LandingFooter;
