var React = require('react');
var SearchHireButtonPage = require('./search-hire-button-page');

var SearchHire = React.createClass({
  render: function(){
    return (
      <div className="">
          <SearchHireButtonPage />
      </div>
    );
  }
});

module.exports = SearchHire;
