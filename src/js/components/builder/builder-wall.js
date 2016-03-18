var React = require('react');
var Wall = require('../global/wall.js');

var BuilderWall = React.createClass({
  render: function(){
    return (
      <div className="">
        <Wall />
      </div>
    );
  }
});

module.exports = BuilderWall;
