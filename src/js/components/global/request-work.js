var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var TextField = require('material-ui/lib/TextField');
var DatePicker = require('material-ui/lib/date-picker/date-picker');
var Slider = require('material-ui/lib/slider');
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './custom-theme.js';



var RequestWork = React.createClass({

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
      proximity: 10

    };
  },

  getValue: function(event, index, value) {
    this.setState({
      trade: value
    });
  },

  getProximity: function(event, value) {
    this.setState({
      proximity: value
    });
  },

  render: function(){
    return (
      <div className="margin-30 push-footer-to-bottom">

        <div className="component-title-box">
        <h5 className="center-align"> Request Work</h5>
        </div>

        <div className=" request-work z-depth-1">

        <label>Trade Required</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.trade} onChange={this.getValue}>
              <MenuItem value={'All'} primaryText="All"/>
              <MenuItem value={'Carpenter'}  primaryText="Carpenter"/>
              <MenuItem value={'Plumber'}  primaryText="Plumber"/>
              <MenuItem value={'Electrician'}  primaryText="Electrician"/>
              <MenuItem value={'Ground Work'}  primaryText="Ground Work"/>
              <MenuItem value={'Plasterer'}  primaryText="Plasterer"/>
              <MenuItem value={"Painter"}  primaryText= "Painter"/>
              <MenuItem value={"Brick Layer"}  primaryText= "Brick Layer"/>
            </SelectField>
          </div>
        </div>

        <label>Job Required</label>
        <div className="row">
          <div className="col s12 l6">
            <TextField
              hintText="..."
              multiLine={true}
              rows={4}
              rowsMax={8}
            />
          </div>
        </div>

        <label>Proximity</label>
        <div className="row">
          <div className="col s12 l6">
            <div><p>{this.state.proximity} miles</p></div>
            <Slider min={0} max={50} step={1} value={this.state.proximity} onChange={this.getProximity}/>
          </div>
        </div>

        <label>Required Start Date</label>
        <div className="row">
          <div className="col s12 l6">
            <DatePicker hintText="Date" locale='uk' />
          </div>
        </div>



        <label>Site Viewing Availability From</label>
        <div className="row">
          <div className="col s12 l2">
            <DatePicker hintText="Date" locale='uk' />
          </div>
        </div>

        <label>Site Viewing Availability To</label>
        <div className="row">
          <div className="col s12 l2">
            <DatePicker hintText="Date" locale='uk' />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6">
            <a className="waves-effect waves-light btn darkest-color"><i className="material-icons left">file_upload</i>Upload Files</a>
          </div>
        </div>

         </div>





      </div>
    );
  }
});

module.exports = RequestWork;
