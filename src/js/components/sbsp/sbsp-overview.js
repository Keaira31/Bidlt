var React = require('react');
var Agenda = require('../global/agenda.js');


var SbspOverview = React.createClass({
  render: function(){
    return (
      <div className="">
        <div className="main-padding margin-30">
          <div className="component-title-box">
            <h5 className="center-align"> Tasks Overview </h5>
          </div>

          <div className="row">
          <table className=" tasks-table bordered responsive-table">
            <thead>
              <tr>
                  <th data-field="id">Description</th>
                  <th data-field="name">Time</th>
                  <th data-field="price">Priority</th>
                  <th data-field="price">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Completion SW Build</td>
                <td>5 days</td>
                <td>Medium</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Build in East London</td>
                <td>3 days</td>
                <td>Low</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>Site visit for new project</td>
                <td>1 days</td>
                <td>Low</td>
                <td>Completed</td>
              </tr>
            </tbody>
            </table>
          </div>

          <div className="component-title-box">
            <h5 className="center-align"> Files Uploaded </h5>
          </div>


          <div className="row">
            <div className="col s12 l4">
              <ul className="collection with-header">
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
              </ul>
            </div>
            <div className="col s12 l4">
              <ul className="collection with-header">
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
              </ul>
            </div>
            <div className="col s12 l4">
              <ul className="collection with-header">
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item "><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
              </ul>
            </div>
          </div>



        </div>


        <Agenda />
      </div>
    );
  }
});

module.exports = SbspOverview;
