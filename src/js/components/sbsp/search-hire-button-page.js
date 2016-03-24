var React = require('react');
var Link = require('react-router').Link;


var SearchHireButtonPage = React.createClass({

  componentDidMount(){
    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });
  },

  render: function(){
    return (
      <div className="main-padding margin-30 search-hire-button">

        <div className="row">
          <div className="search-hire-button-outer-div col s12 m6 l3 offset-l3" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                <a className="modal-trigger" href="#coming-soon">
                 <i className="material-icons large">local_shipping</i>
                <h5 className="">
                Materials
                </h5>
                </a>
              </div>
            </div>
          </div>
          <div className=" search-hire-button-outer-div col s12 m6 l3" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                <a className="modal-trigger" href="#coming-soon">
                 <i className="material-icons large">content_paste</i>
                <h5 className="">
                Hire
                </h5>
              </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="search-hire-button-outer-div col s12 m6 l3 offset-l3" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                <Link className="modal-trigger" to="SBSPTemplate/SearchHire/Labour">
                 <i className="material-icons large">person_pin</i>
                <h5 className="">
                Labour
                </h5>
              </Link>
              </div>
            </div>
          </div>
          <div className=" search-hire-button-outer-div col s12 m6 l3" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                <a className="modal-trigger" href="#coming-soon">
                 <i className="material-icons large">build</i>
                <h5 className="">
                Tooling
                </h5>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="coming-soon">
          <div className="modal-content">

            <h5 className="center">Coming Soon</h5>
            <div className="modal-footer">
                <a className="modal-action modal-close btn center primary-color waves-effect hover-color waves-light">Close</a>
            </div>

          </div>
        </div>

      </div>
    );
  }
});

module.exports = SearchHireButtonPage;
