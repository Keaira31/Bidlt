var React = require('react');
var Link = require('react-router').Link;

var OverviewCurrentJobs = React.createClass({
  render: function(){
    return (
      <div className="row main-padding center-align ">
        <h5>Current Jobs</h5>
          <ul className="collection left-align margin-30 ">
            <li className="light-primary-color collection-item bold current-jobs">Current jobs you are working on</li>
            <li className="collection-item">Fix the Door for Mrs. Bowes</li>
            <li className="collection-item">Plubming Job for Mr. Sofer</li>
            <li className="collection-item">Replace the Oven for Mr. Rees</li>
          </ul>
      </div>
    );
  }
});

module.exports = OverviewCurrentJobs;
