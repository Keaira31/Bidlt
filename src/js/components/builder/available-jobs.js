var React = require('react');
var JobSearch = require('./job-search.js');
var JobSearchResult = require('./job-search-result.js');

var AvailableJobs = React.createClass({
  render: function(){
    return (
      <div className="builder-available-jobs">
        <JobSearch />
      </div>
    );
  }
});

module.exports = AvailableJobs;
