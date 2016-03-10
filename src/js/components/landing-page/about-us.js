var React = require('react');

var AboutUs = React.createClass({
  render: function(){
    return (
      <div className="row about-us light-primary-color">
        <div className='col s12 l12 center'>
          <h2>ABOUT US</h2>
        </div>
        <div className='col s12 l6 left'>
          <img className='responsive-img' src="http://www.texturepalace.com/gallery/concrete/120913/concrete-texture-20.jpg"/>
        </div>
        <div className='col s12 l6 right'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
});

module.exports = AboutUs;
