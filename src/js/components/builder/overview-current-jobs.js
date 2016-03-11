var React = require('react');
var Link = require('react-router').Link;

var OverviewCurrentJobs = React.createClass({
  render: function(){
    return (
      <div className="row main-padding center-align margin-30 ">
        <div className="component-title-box">
          <h5>Current Jobs</h5>
        </div>
          <ul className="collection left-align ">
            <li className="collection-item ">Current jobs you are working on</li>
            <li className="collection-item">Fix the Door for Mrs. Bowes</li>
            <li className="collection-item">Plubming Job for Mr. Sofer</li>
            <li className="collection-item">Replace the Oven for Mr. Rees</li>
          </ul>
      </div>
    );
  }
});

module.exports = OverviewCurrentJobs;
