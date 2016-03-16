var React = require('react');


var JobTender = React.createClass({
  render: function(){
    return (
      <div className="">
        {this.props.routeParams.id}
      </div>
    );
  }
});

module.exports = JobTender;
