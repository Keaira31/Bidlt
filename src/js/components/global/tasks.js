var React = require('react');
var TextField = require('material-ui/lib/text-field');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');


var Tasks = React.createClass({
  getInitialState(){
    return {
      description: '',
      time:1,
      priority:'Low',
      status:'Pending',
      tasks: []
    };
  },

  getValue: function(name, event,index,value) {
    var change = {};
    change[name] = value;
    this.setState(change);
  },

  getDescription(keyName, e){
      var change = {};
      change[keyName] = e.target.value;
      this.setState(change);
  },


  addTasks: function(){
    this.setState({
      description: "",
      time: 1,
      priority: "Low",
      status: "Pending",
      tasks: this.state.tasks.concat({description: this.state.description, time: this.state.time, priority: this.state.priority, status: this.state.status})
    });
  },

  render: function(){
    console.log(this.state);
    var tasks = this.state.tasks.map(function(elem) {
      return (
        <tr key={elem.description}>
          <td>{elem.description}</td>
          <td>{elem.time}</td>
          <td>{elem.priority}</td>
          <td>{elem.status}</td>
        </tr>
      )
    })

    return (
      <div className="">
        <h5 className="center">Tasks</h5>
        <br></br>


        <div className=" request-work row z-depth-1">
            <label>Task Description</label>
            <div className="row">
              <div className="col s12 l12">
              <br></br>
                <TextField
                  style={{
                    width: '80%'
                  }}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  underlineFocusStyle={{display: "none"}}
                  underlineStyle={{}}
                  value={this.state.description}
                  onChange={this.getDescription.bind(this, 'description')}
                  />
              </div>
            </div>

            <label>Time Estimate</label>
            <div className="row">
              <div className="col s12 l6">
                <SelectField value={this.state.time} onChange={this.getValue.bind(this,'time')}>
                  <MenuItem value={1} primaryText="1 Day"/>
                  <MenuItem value={2}  primaryText="2 Days"/>
                  <MenuItem value={3}  primaryText="3 Days"/>
                  <MenuItem value={4}  primaryText="7 Days"/>
                  <MenuItem value={5}  primaryText="30 Days"/>
                </SelectField>
              </div>
            </div>



            <label>Priority</label>
            <div className="row">
              <div className="col s12 l6">
                <SelectField value={this.state.priority} onChange={this.getValue.bind(this,'priority')}>
                  <MenuItem value={'Low'} primaryText="Low"/>
                  <MenuItem value={'Medium'}  primaryText="Medium"/>
                  <MenuItem value={'High'}  primaryText="High"/>
                </SelectField>
              </div>
            </div>

            <label>Status</label>
            <div className="row">
              <div className="col s12 l6">
                <SelectField value={this.state.status} onChange={this.getValue.bind(this,'status')}>
                  <MenuItem value={'Pending'} primaryText="Pending"/>
                  <MenuItem value={'In Progress'}  primaryText="In Progress"/>
                  <MenuItem value={'Completed'}  primaryText="Completed"/>
                </SelectField>
              </div>
            </div>


          </div>

          <div className="row">
            <div className="col s12 l12 right-align">
              <button className=" darkest-color btn waves-effect waves-light" onClick={this.addTasks}>Add Task
              <i className="material-icons right">add</i>
              </button>
            </div>
          </div>

          <div className="row">
          <table className=" tasks-table bordered responsive-table highlight">
            <thead>
              <tr>
                  <th data-field="id">Description</th>
                  <th data-field="name">Time</th>
                  <th data-field="price">Priority</th>
                  <th data-field="price">Status</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alvin</td>
                <td>07774547123</td>
                <td>Electrician: 10+ Years</td>
                <td>5 days</td>
              </tr>

              {tasks}


            </tbody>
            </table>
          </div>


      </div>
    );
  }
});

module.exports = Tasks;
