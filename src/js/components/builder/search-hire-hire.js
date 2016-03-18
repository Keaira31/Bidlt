var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var Slider = require('material-ui/lib/slider');
var HireData = require('./hire-data.js');
var Link = require('react-router').Link;


var SearchHireButtonPage = React.createClass({

  getInitialState: function() {
    return {
      equipment: "All",
      urgency: "All",
      duration: "All",
      proximity: 10
    };
  },

  getJobSearchResult: function() {
      var equipment = this.state.equipment;
      var urgency = this.state.urgency;
      var duration = this.state.duration;
      var proximity = this.state.proximity;
      var renderResults = this.renderResults;
      return HireData.filter(function(elem) {
        if (equipment === 'All') {
          return elem
        } else if (elem.equipment == equipment) {
          return elem
        }
      }).filter(function(elem){
        if (urgency === 'All') {
          return elem
        } else if (elem.urgency == urgency) {
          return elem
        }
      }).filter(function(elem){
        if (duration === 'All') {
          return elem
        } else if (elem.duration == duration) {
          return elem
        }
      }).filter(function(elem){
        if (elem.proximity < proximity){
          return elem
        }
      }).map(renderResults)

  },

  renderResults: function(elem){
      return (
              <li key={elem.id} className="collection-item avatar">
              <img src={elem.images} alt="" className="circle" />
              <span className="title job-result-title">{elem.company}</span>
              <p className="darkest-text-color job-result-trade">{elem.address}<br></br><br></br></p>
              <p>Available in {elem.urgency} Days</p>
              <p>{elem.cost}</p>
              <div className="right-align">


                <a href="tel:07746811574">
                <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">call</i></button>
                </a>

              <a href='mailto:hello@bidlt.com' >
              <button className=" primary-color btn-floating waves-effect waves-light" type="submit" name="action"><i className="material-icons">mail</i></button>
              </a>
              </div>
              <p className=" hide-on-med-and-down primary-text-color secondary-content">{elem.distance}</p>
            </li>
          )
  },

  getValue: function(name, event,index,value) {
    var change = {};
    change[name] = value;
    this.setState(change);
  },

  getProximity: function(event,value) {
    this.setState({
      proximity: value
    });
  },


  componentDidMount(){
    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });
  },

  render: function(){
    console.log(this.state);
    return (
      <div className="main-padding margin-30 search-hire-button">


          <div className="component-title-box">
            <h5 className="center-align"> Equipment for Hire </h5>
          </div>
          <div className="back-button-container col l3 s12 right-align">
            <Link to="/BuilderTemplate/SearchHire" className="btn-flat waves-effect waves-light darkest-text-color">
            <i className="material-icons left darkest-text-color">keyboard_backspace</i> Back</Link>
          </div>

          <label>Equipment</label>
          <div className="row">
            <div className="col s12 l6">
              <SelectField value={this.state.equipment} onChange={this.getValue.bind(this,'equipment')}>
                <MenuItem value={'All'} primaryText="All"/>
                <MenuItem value={'Drill'}  primaryText="Drill"/>
                <MenuItem value={'Digger'}  primaryText="Digger"/>
              </SelectField>
            </div>
          </div>
          <label>Urgency</label>
          <div className="row">
            <div className="col s12 l6">
              <SelectField value={this.state.urgency} onChange={this.getValue.bind(this,'urgency')}>
                <MenuItem value={'All'} primaryText="All"/>
                <MenuItem value={1} primaryText="1 Day"/>
                <MenuItem value={2} primaryText="2 Days"/>
                <MenuItem value={3} primaryText="3 Days"/>
                <MenuItem value={4} primaryText="4 Days"/>
              </SelectField>

            </div>
          </div>

          <label>Duration</label>
          <div className="row">
            <div className="col s12 l6">
              <SelectField value={this.state.duration} onChange={this.getValue.bind(this,'duration')}>
                <MenuItem value={'All'} primaryText="All"/>
                <MenuItem value={1} primaryText="1 Day"/>
                <MenuItem value={2} primaryText="2 Days"/>
                <MenuItem value={3} primaryText="3 Days"/>
                <MenuItem value={4} primaryText="4 Days"/>
              </SelectField>

            </div>
          </div>
          <label>Proximity</label>
          <div className="row">
            <div className="col s12 l6">
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

module.exports = SearchHireButtonPage;
