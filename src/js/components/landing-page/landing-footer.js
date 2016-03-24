var React = require('react');

var LandingFooter = React.createClass({
  render: function(){
    return (

      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">The BILDT Platform</h5>
                <p className="">You can access our different platforms via our sign in button or these links</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">I am a...</h5>
                <ul>
                  <li><a className="" href="#!">Builder</a></li>
                  <li><a className="" href="#!">Small Project or Build Owner</a></li>
                  <li><a className="" href="#!">Customer</a></li>
                  <li><a className="" href="#!">Looking to Lease</a></li>
                  <li><a className="" href="#!">Supplier</a></li>
                  <li><a className="" href="#!">Project Holder</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright of BILDT UK
            <a className="right" href="#!">CONTACT US</a>
            </div>
          </div>
        </footer>
    );
  }
});

module.exports = LandingFooter;
