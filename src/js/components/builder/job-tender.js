var React = require('react');
var JobData = require('./job-data.js');
var Gallery = require('react-image-gallery');
require('react-image-gallery/build/image-gallery.css');



var JobTender = React.createClass({

  getInitialState: function() {
    return {
      job: {
        key: "hello",
        images: []
      }
    };
  },

  componentDidMount() {
    var id = this.props.routeParams.id;
    var getJobData = JobData.filter(function(elem){
      return elem.id == id;
    });
    this.setState({
      job: getJobData[0]
    });
  },

  render: function(){
    console.log("this is the images", this.state.job.images);
    return (

      <div className="job-tender-component main-padding margin-30">
        <div className="component-title-box">
          <h5 className="center-align"> {this.state.job.title} </h5>
        </div>

        <div className="row">
          <div className="image-gallery-box col s12 l6">
            <Gallery items={this.state.job.images}/>
          </div>
          
        </div>
      </div>
    );
  }
});

module.exports = JobTender;
