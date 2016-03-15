var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var Slider = require('material-ui/lib/slider');

var JobSearch = React.createClass({

  getInitialState: function() {
    return {
      trade: "all",
      jobType: "all",
      proximity: 10
    };
  },

  getJobSearchResult: function(e) {
    e.preventDefault();
  },

  getValue: function(event, index, value) {
    console.log(event);
    this.setState({
      trade: value
    });
  },

  getJobType: function(event, index, value) {
    this.setState({
      jobType: value
    });
  },

  getProximity: function(event, value) {
    console.log(value);
    this.setState({
      proximity: value
    });
  },


  render: function(){
    console.log(this.state);
    return (

      <div className="main-padding margin-30 row">
        <div className="component-title-box">
        <h5 className="center-align"> Available Jobs </h5>
        </div>
        <label>Your Trade</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.trade} onChange={this.getValue}>
              <MenuItem value={'all'} primaryText="All"/>
              <MenuItem value={'electrician'} primaryText="Electrician"/>
              <MenuItem value={'plumber'} primaryText="Plumber"/>
              <MenuItem value={'ground-work'} primaryText="Ground Work"/>
              <MenuItem value={'carpenter'} primaryText="Carpenter"/>
              <MenuItem value={'plasterer'} primaryText="Plasterer"/>
              <MenuItem value={"painter"} primaryText= "Painter"/>
              <MenuItem value={"brick-layer"} primaryText= "Brick Layer"/>
            </SelectField>
          </div>
        </div>
        <label>Job Type</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.jobType} onChange={this.getJobType}>
              <MenuItem value={'all'} primaryText="All"/>
              <MenuItem value={'tlc'} primaryText="TLC"/>
              <MenuItem value={'self-build'} primaryText="Self Build"/>
              <MenuItem value={'small-project'} primaryText="Small Project"/>
            </SelectField>
          </div>
        </div>
        <label>Proximity</label>
        <div className="row">
          <div className="col s12 l6">
            <Slider min={0} max={50} step={1} value={this.state.proximity} onChange={this.getProximity}/>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = JobSearch;
