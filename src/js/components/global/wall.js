var React = require('react');

var Splash = React.createClass({
  render: function(){
    return (
      <div className="main-padding margin-30 search-hire-button">

        <div className="component-title-box">
        <h5 className="center-align"> Available Jobs </h5>
        </div>

        <div className="row ">

          <div className="col s12 l10">
            <ul className="collection wall wall-first">
              <li className="collection-item">
                <span className="title">Hey Are you going to take the new job in E2?</span>
                <p>
                <br></br>
                </p>
              </li>
            </ul>

            <ul className="collection wall right-align wall-second">
              <li className="collection-item  right-align">
                <span className="title">Not Sure, the rate is not great.</span>
                  <p>
                  <br></br>
                  </p>
              </li>
            </ul>
            <ul className="collection wall wall-first">
              <li className="collection-item ">
                <span className="title">Hey Are you going to take the new job in E2?</span>
                  <p>
                  <br></br>
                  </p>
              </li>
            </ul>

            <ul className="collection wall right-align wall-second">
              <li className="collection-item  right-align">
                <span className="title">Not Sure, the rate is not great.</span>
                  <p>
                  <br></br>
                  </p>
              </li>
            </ul>

            <div className="z-depth-1 wall-comment row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label for="textarea1">Type your message here</label>
                  </div>
                </div>
              </form>
            </div>

          </div>

          <div className="col hide-on-med-and-down l2">


            <ul className="collection wall ">
            <li className=" primary-color collection-item avatar">
              <p>Eddy J</p>
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            </li>
            </ul>
            <ul className="collection wall ">
            <li className=" secondary-color collection-item avatar">
              <p>Matt Rees</p>
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            </li>
            </ul>

          </div>

        </div>

      </div>
    );
  }
});

module.exports = Splash;
