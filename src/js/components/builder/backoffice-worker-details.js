var React = require('react');
var TextField = require('material-ui/lib/text-field');

var WorkerDetails = React.createClass({
  getInitialState(){
    return {
      name: '',
      number:'',
      expertise:'',
      availabilty:'',
      workers: []
    };
  },

  getWorkerDetail(keyName, e){
      var change = {};
      change[keyName] = e.target.value;
      this.setState(change);
  },

  addWorker: function(){
    this.setState({
      name: "",
      number: "",
      expertise: "",
      availabilty: "",
      workers: this.state.workers.concat({name: this.state.name, number: this.state.number, expertise: this.state.expertise, availabilty: this.state.availabilty})
    });
  },

  render: function(){
    var workers = this.state.workers.map(function(elem) {
      return (
        <tr key={elem.name}>
          <td>{elem.name}</td>
          <td>{elem.number}</td>
          <td>{elem.expertise}</td>
          <td>{elem.availabilty}</td>
        </tr>
      )
    })

    return (
      <div className="">
      <div className="modal-content">
        <h5 className="center">Worker Details</h5>
        <br></br>
        <div className="row z-depth-1">
            <div className="col s12 l3">
            <label>Name</label>
            <br></br>
              <TextField
                style={{
                  width: '80%'
                }}
                underlineFocusStyle={{display: "none"}}
                underlineStyle={{}}
                ref="name"
                value={this.state.name}
                onChange={this.getWorkerDetail.bind(this, 'name')}
                />
            </div>
            <div className="col s12 l3">
              <label>Number</label>
              <br></br>
              <TextField
                style={{
                  width: '80%'
                }}
                underlineFocusStyle={{display: "none"}}
                underlineStyle={{}}
                ref="number"
                value={this.state.number}
                onChange={this.getWorkerDetail.bind(this, 'number')}
                />
            </div>
            <div className="col s12 l3">
              <label>Expertise</label>
              <br></br>
              <TextField
                style={{
                  width: '80%'
                }}
                underlineFocusStyle={{display: "none"}}
                underlineStyle={{}}
                ref="expertise"
                value={this.state.expertise}
                onChange={this.getWorkerDetail.bind(this, 'expertise')}
                />
            </div>
            <div className="col s12 l3">
              <label>Availabilty</label>
              <br></br>
              <TextField
                style={{
                  width: '80%'
                }}
                underlineFocusStyle={{display: "none"}}
                underlineStyle={{}}
                ref="availabilty"
                value={this.state.availabilty}
                onChange={this.getWorkerDetail.bind(this, 'availabilty')}
                />

            </div>


          </div>
          <div className="row">
            <div className="col s12 l12 right-align">
              <button className=" darkest-color btn waves-effect waves-light" onClick={this.addWorker}>Add Worker
              <i className="material-icons right">add</i>
              </button>
            </div>
          </div>

          <div className="row">
          <table className="bordered responsive-table highlight">
            <thead>
              <tr>
                  <th data-field="id">Name</th>
                  <th data-field="name">Number</th>
                  <th data-field="price">Expertise</th>
                  <th data-field="price">Availabilty</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alvin</td>
                <td>07774547123</td>
                <td>Electrician: 10+ Years</td>
                <td>5 days</td>
              </tr>

              {workers}


            </tbody>
            </table>
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
