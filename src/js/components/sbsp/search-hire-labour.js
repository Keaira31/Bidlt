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
            <span className="title">Title</span>
            <p>First Line <br></br>
               Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
        </ul>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line <br></br>
               Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
        </ul>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="https://www.drupal.org/files/profile_default.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line <br></br>
               Second Line
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
        </ul>


      </div>
    );
  }
});

module.exports = SearchHireLabour;
