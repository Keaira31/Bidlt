var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var TextField = require('material-ui/lib/text-field');



var TenderModal = React.createClass({

  getInitialState: function() {
    return {
      workers:1,
    };
  },

  getWorkers: function(event, index, value) {
    this.setState({
      workers: value
    });
  },

  render: function(){
    return (
      <div className="">
          <div className="modal-content">
            <div className="right-align">
              <a className="modal-action modal-close btn-flat center waves-effect waves-light"><i className="material-icons right">close</i>Close</a>
            </div>
            <h4 className="submit-tender-header center">Estimate</h4>


              <div className="row z-depth-1">

                <div className="row">
                  <div className="input-field col s12 l6 left-align">
                    <input placeholder="2" type="number" ></input>
                      <label className="active">Workers Required</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s6 l3 left-align">
                    <input placeholder="Days"  type="text" ></input>
                      <label className="active">Time Needed</label>
                  </div>
                  <div className="input-field col s6 l3 left-align">
                    <input placeholder="Hours"  type="text" ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 l6 left-align">
                    <textarea  className="materialize-textarea"></textarea>
                    <label className="active" for="textarea1">Questions & Comments</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 l6 left-align">
                    <input placeholder="£20,000" type="text" ></input>
                      <label className="active">Cost To Build</label>
                  </div>
                </div>


              </div>





            <div className="row">
                <div className="right-align">
                  <a className="darkest-color btn waves-effect waves-light modal-close modal-action" >
                    Place an Estimate
                  <i className="material-icons right">send</i>
                  </a>
              </div>
            </div>

          </div>

      </div>

    );
  }
});

module.exports = TenderModal;
