var React = require('react');
var TextField = require('material-ui/lib/text-field');

var WorkerDetails = React.createClass({
  getInitialState(){
    return {
      name: '',
      number:'',
      expertise:'',
      availabilty:''
    };
  },

  getWorkerDetail(keyName, e){
      var change = {};
      change[keyName] = e.target.value;
      this.setState(change);
  },

  render: function(){
    console.log(this.state);
    return (
      <div className="">
      <div className="modal-content">
        <h5 className="center">Worker Details</h5>

        <div className="row">
            <div className="col s12 l3">
              <TextField
                ref="name"
                hintText="Name"
                value={this.state.name}
                onChange={this.getWorkerDetail.bind(this, 'name')}
                />
            </div>
            <div className="col s12 l3">
              <TextField
                ref="number"
                hintText="Number"
                value={this.state.number}
                onChange={this.getWorkerDetail.bind(this, 'number')}
                />
            </div>
            <div className="col s12 l3">
              <TextField
                ref="expertise"
                hintText="Expertise"
                value={this.state.expertise}
                onChange={this.getWorkerDetail.bind(this, 'expertise')}
                />
            </div>
            <div className="col s12 l3">
              <TextField
                ref="availabilty"
                hintText="Availabilty"
                value={this.state.availabilty}
                onChange={this.getWorkerDetail.bind(this, 'availabilty')}
                />
            </div>


          </div>


        <div className="modal-footer">
            <a className="modal-action modal-close btn center primary-color waves-effect hover-color waves-light">Close</a>
        </div>

      </div>

      </div>
    );
  }
});

module.exports = WorkerDetails;
