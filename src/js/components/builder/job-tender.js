var React = require('react');
var JobData = require('./job-data.js');
var Gallery = require('react-image-gallery');
var TenderGoogleMap = require('./tender-google-map.js');
var TenderModal = require('./job-tender-modal.js');
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

    $(document).ready(function(){
      $('.modal-trigger').leanModal();
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
          <div className="image-gallery-box col s12 l12">
            <Gallery items={this.state.job.images}/>
          </div>
        </div>

        <div className="row">
          <div className="job-text col s12 l6">
            <h4> Job Details</h4>
            <p> {this.state.job.jobDescription}</p>
          </div>

          <div className="col s12 l6">
            <TenderGoogleMap />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l12 right-align">
            <button className="darkest-color btn-large waves-effect waves-light modal-trigger" data-target="submit-tender">
              Start Tender Process
            <i className="material-icons right">send</i>
            </button>
          </div>
        </div>

        <div className="modal" id="submit-tender">
          <TenderModal />
        </div>
      </div>
    );
  }
});

module.exports = JobTender;
