var React = require('react');
var BackOfficeButtonPage = require('./backoffice-button-page.js');

var BackOffice = React.createClass({
  render: function(){
    return (
      <div className="builder-backoffice">
        <BackOfficeButtonPage />
      </div>
    );
  }
});

module.exports = BackOffice;
