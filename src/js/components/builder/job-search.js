var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var Slider = require('material-ui/lib/slider');
var JobData = require('./job-data-2.js');
var Link = require('react-router').Link;
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../global/custom-theme.js';


var JobSearch = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme:   ThemeManager.getMuiTheme(MyRawTheme),
    };
  },

  getInitialState: function() {
    return {
      trade: "All",
      jobType: "All",
      proximity: 10
    };
  },

  getJobSearchResult: function() {
      var trade = this.state.trade;
      var jobType = this.state.jobType;
      var proximity = this.state.proximity;
      var renderResults = this.renderResults;
      return JobData.filter(function(elem) {
        if (trade === 'All') {
          return elem
        } else if (elem.trade == trade) {
          return elem
        }
      }).filter(function(elem){
        if (jobType === 'All') {
          return elem
        } else if (elem.jobType == jobType) {
          return elem
        }
      }).filter(function(elem){
        if (elem.proximity < proximity){
          return elem
        }
      }).map(renderResults)

  },

  renderResults: function(elem){
    var linkValue = "BuilderTemplate/AvailableJobs/" + elem.id;
      return (
              <li key={elem.id} className="collection-item avatar">
              <img src={elem.images[0].original} alt="" className="circle" />
              <span className="title job-result-title">{elem.title}</span>
              <p className="darkest-text-color job-result-trade">{elem.trade} - {elem.jobType}
              <br></br>
              <br></br>
              </p>
              <p className="truncate">
              {elem.jobDescription}
                <br></br>

              </p>
              <div className="left-align">
              <Link to={linkValue}><button className=" primary-color btn waves-effect waves-light" type="submit" name="action">View Details</button></Link>
              </div>
              <p className=" hide-on-med-and-down primary-text-color secondary-content">{elem.distance}</p>
            </li>
          )
  },

  getValue: function(event, index, value) {
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
    this.setState({
      proximity: value
    });
  },


  render: function(){
    return (
      <div className="main-padding margin-30 row">
        <div className="component-title-box">
        <h5 className="center-align"> Available Jobs </h5>
        </div>
        <label>Your Trade</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.trade} onChange={this.getValue} style={{width: '40%'}}>
              <MenuItem value={'All'} primaryText="All"/>
              <MenuItem value={'Ariel/Communications Specialist'}  primaryText="Ariel/Communications Specialist"/>
              <MenuItem value={'Architects'}  primaryText="Architects"/>
              <MenuItem value={'Bathroom Specialist'}  primaryText="Bathroom Specialist"/>
              <MenuItem value={'Blacksmith/Metalworking Specialist'}  primaryText="Blacksmith/Metalworking Specialist"/>
              <MenuItem value={'Bricklayer'}  primaryText="Bricklayer"/>
              <MenuItem value={'Builder'}  primaryText="Builder"/>
              <MenuItem value={'Carpenter'}  primaryText="Carpenter"/>
              <MenuItem value={'Cleaner'}  primaryText="Cleaner"/>
              <MenuItem value={'Drainage Engineer'}  primaryText="Drainage Engineer"/>
              <MenuItem value={'Driveway Specialist'}  primaryText="Driveway Specialist"/>
              <MenuItem value={'Electrician'} primaryText="Electrician"/>
              <MenuItem value={'Flooring Specialist'} primaryText="Flooring Specialist"/>
              <MenuItem value={'Gardener'} primaryText="Gardener"/>
              <MenuItem value={'Garden Designer'} primaryText="Garden Designer"/>
              <MenuItem value={'Ground Worker'} primaryText="Ground Worker"/>
              <MenuItem value={'Handyman'} primaryText="Handyman"/>
              <MenuItem value={'Heating Engineer'} primaryText="Heating Engineer"/>
              <MenuItem value={'Joiner'} primaryText="Joiner"/>
              <MenuItem value={'Kitchen Specialist'} primaryText="Kitchen Specialist"/>
              <MenuItem value={'Locksmith'} primaryText="Locksmith"/>
              <MenuItem value={'Loft Conversion Specialist'} primaryText="Loft Conversion Specialist"/>
              <MenuItem value={'Painter/Decorator'} primaryText="Painter/Decorator"/>
              <MenuItem value={'Pest Control'} primaryText="Pest Control"/>
              <MenuItem value={'Plasterer'} primaryText="Plasterer"/>
              <MenuItem value={'Plumber'} primaryText="Plumber"/>
              <MenuItem value={'Roofer'} primaryText="Roofer"/>
              <MenuItem value={'Security Specialist'} primaryText="Security Specialist"/>
              <MenuItem value={'Stoneworker/Stonemason'} primaryText="Stoneworker/Stonemason"/>
              <MenuItem value={'Swimming Pool Specialist'} primaryText="Swimming Pool Specialist"/>
              <MenuItem value={'Tiler'} primaryText="Tiler"/>
              <MenuItem value={'Traditional Crafstmen'} primaryText="Traditional Crafstmen"/>
              <MenuItem value={'Tree Surgeon'} primaryText="Tree Surgeon"/>
              <MenuItem value={'Window & Conservatory Specialist'} primaryText="Window & Conservatory Specialist"/>
              <MenuItem value={''} disabled primaryText="-------------------------------------"/>
              <MenuItem value={"Independent Craftsment for Tailored Projects"} primaryText= "Independent Craftsment for Tailored Projects"/>
            </SelectField>
          </div>
        </div>
        <label>Job Type</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.jobType} onChange={this.getJobType} style={{width: '40%'}}>
              <MenuItem value={'All'} primaryText="All"/>
              <MenuItem value={'Self Build'} primaryText="Self Build"/>
              <MenuItem value={'Small Project'} primaryText="Small Project"/>
              <MenuItem value={'Customer'} primaryText="Customer"/>
              <MenuItem value={'TLC'} disabled primaryText="TLC"/>

            </SelectField>

          </div>
        </div>
        <label>Proximity</label>
        <div className="row proximity-slider">
          <div className="col s12 l6">
            <div><p>{this.state.proximity} miles</p></div>
            <Slider min={0} max={50} step={1} value={this.state.proximity} onChange={this.getProximity}/>
          </div>
        </div>
        <div className="row right-align">
          <div className="col s12 l6 right-align">
            <button onClick={this.getJobSearchResult} className=" darkest-color btn waves-effect waves-light" type="submit" name="action">Search
            <i className="material-icons right">search</i>
            </button>
          </div>
        </div>
        <label>Search Results</label>
          <ul className="collection">
        {this.getJobSearchResult()}
      </ul>
      </div>

    );
  }
});

module.exports = JobSearch;
