var React = require('react');
var Link = require('react-router').Link;



var SearchHireLabour = React.createClass({



  render: function(){
    return (
      <div className="main-padding margin-30 search-hire-button">


        <div className="component-title-box">
          <h5 className="center-align"> Labour </h5>
        </div>
        <div className="back-button-container col l3 s12 right-align">
          <Link to="/SBSPTemplate/SearchHire" className="btn-flat waves-effect waves-light darkest-text-color">
          <i className="material-icons left darkest-text-color">keyboard_backspace</i> Back</Link>
        </div>

        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            <span className="title"><b>Owen Davies</b></span>
            <p>Electrician <br></br>
               <i>1 year Experience</i>
            </p>
            <p className="right-align secondary-content darkest-text-color">Avaliable in 2 months<br></br>Rate: 200 p/day</p>
              <div className="right-align">
                <a href="tel:07746811574">
                  <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">call</i></button>
                </a>

                <a href='mailto:hello@bidlt.com' >
                  <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">mail</i></button>
                </a>
              </div>
        </li>
        </ul>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            <span className="title"><b>Jessica Evans</b></span>
            <p>Surveyor<br></br>
               <i>3 years Experience</i>
            </p>
            <p className="right-align secondary-content darkest-text-color">Avaliable in 1 month<br></br>Rate: 180 p/day</p>
              <div className="right-align">
                <a href="tel:07746811574">
                  <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">call</i></button>
                </a>

                <a href='mailto:hello@bidlt.com' >
                  <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">mail</i></button>
                </a>
              </div>
        </li>
        </ul>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            <span className="title"><b>Matt Roberts</b></span>
            <p>Plumber <br></br>
               <i>2 years Experience</i>
            </p>
            <p className="right-align secondary-content darkest-text-color">Avaliable in 1 month<br></br>Rate: 250 p/day</p>
              <div className="right-align">
                <a href="tel:07746811574">
                  <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">call</i></button>
                </a>

                <a href='mailto:hello@bidlt.com' >
                  <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">mail</i></button>
                </a>
              </div>
        </li>
        </ul>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            <span className="title"><b>James Taylor</b></span>
            <p>Carpenter <br></br></p>
            <p><i>5 years Experience</i></p>
            <p className="right-align secondary-content darkest-text-color">Avaliable in 2 months<br></br>Rate: 150 p/day</p>
            <div className="right-align">
              <a href="tel:07746811574">
                <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">call</i></button>
              </a>

              <a href='mailto:hello@bidlt.com' >
                <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">mail</i></button>
              </a>
            </div>
          </li>
        </ul>


      </div>
    );
  }
});

module.exports = SearchHireLabour;
