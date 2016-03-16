var React = require('react');
var JobData = require('./job-data.js');
var Gallery = require('react-image-gallery');
var TenderGoogleMap = require('./tender-google-map.js');
var TenderModal = require('./job-tender-modal.js');
var Link = require('react-router').Link;
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

        <div className="row">
          <div className="back-button-container col l3 s12 left-align">
            <Link to="/BuilderTemplate/AvailableJobs" className="btn-flat waves-effect waves-light darkest-text-color">
            <i className="material-icons left darkest-text-color">keyboard_backspace</i> Back</Link>
          </div>

          <div className="center-align col l6 s12">
            <h4 className="center-align"> {this.state.job.title} </h4>
          </div>
        </div>

        <div className="row">
          <div className="image-gallery-box col s12 l12">
            <Gallery items={this.state.job.images}/>
          </div>
        </div>

        <div className="row">
          <div className="job-text col s12 l6">
            <h5> Job Details</h5>
            <p> {this.state.job.jobDescription}</p>

            <h5> Files Uploaded</h5>
              <ul className="collection with-header">
                <li className="collection-item"><div>File 1<a href="http://www.planningportal.gov.uk/uploads/br/BR_PDF_AD_A_2013.pdf" download="business-regs" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item"><div>File 2<a href="http://www.planningportal.gov.uk/uploads/br/BR_PDF_AD_A_2013.pdf" download="business-regs" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item"><div>File 3<a href="http://www.planningportal.gov.uk/uploads/br/BR_PDF_AD_A_2013.pdf" download="business-regs" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
                <li className="collection-item"><div>File 4<a href="http://www.planningportal.gov.uk/uploads/br/BR_PDF_AD_A_2013.pdf" download="business-regs" className="secondary-content"><i className="material-icons darkest-text-color">file_download</i></a></div></li>
              </ul>
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
