var React = require('react');

var TenderModal = React.createClass({
  render: function(){
    return (
      <div className="">
          <div className="modal-content">
            <h4 className="submit-tender-header center">Submit Tender</h4>



            <div className="modal-footer">
                <a className="modal-action modal-close btn-flat center waves-effect hover-color waves-light">Close</a>
            </div>

          </div>
        
      </div>

    );
  }
});

module.exports = TenderModal;
