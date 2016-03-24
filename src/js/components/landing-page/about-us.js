var React = require('react');

var AboutUs = React.createClass({
  render: function(){
    return (
      <div className="about-us-container darkest-color">
        <div className="row about-us darkest-color">
          <div className='col s12 l12  container center'>
            <h2 className="header about-us-header">Welcome to BIDLT</h2>
          </div>

          <div className='col s12 l12 right about-us-text'>
            <p> The website application of complete construction integration across all of construction and service sectors.
              BIDLT was created out of frustration, that construction and services had a lack of transparency, fairness and information. As a team we have spent time building new houses, renovating, room altering, office fitting and so on.<br></br><br></br>
               What we wanted was a platform that would be the one stop shop for our building requirements and needs. But as well as a back office instantly available without having to worry about loose papers being lost.<br></br><br></br>
                It’s those frustrations that BIDLT was created out of and BIDLT will always fight against those frustrations, and will always innovate for you.<br></br><br></br>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AboutUs;
