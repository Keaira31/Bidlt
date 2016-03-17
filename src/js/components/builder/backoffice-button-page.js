var React = require('react');

var BackOfficeButtonPage = React.createClass({
  render: function(){
    return (
      <div className="builder-backoffice-buttons main-padding margin-30">
        <div className="row">
          <div className="col s12 l2 offset-l3 backoffice-button-outer-div " >
            <div className="backoffice-button-individual valign-wrapper  " >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">history</i>
                <h5 className="">
                Job History
                </h5>
              </div>
            </div>
          </div>
          <div className="col s12 l2 backoffice-button-outer-div" >
            <div className="backoffice-button-individual  valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">people</i>
                <h5 className="">
                Worker Details
                </h5>
              </div>
            </div>
          </div>
          <div className="col s12 l2" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">credit_card</i>
                <h5 className="">
                Invoice
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="backoffice-button-outer-div col s12 l2 offset-l4" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">healing</i>
                <h5 className="">
                H & S
                </h5>
              </div>
            </div>
          </div>
          <div className=" col s12 l2" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">done_all</i>
                <h5 className="">
                HR
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BackOfficeButtonPage;
