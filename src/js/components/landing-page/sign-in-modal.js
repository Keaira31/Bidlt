var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var Link = require('react-router').Link;
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../global/custom-theme.js';

var SignInModal = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },

  getInitialState: function() {
    return {
      platform: "Builder"
    };
  },

  getPlatform: function(event, index, value) {
    this.setState({
      platform: value
    });
  },



  render: function(){
    return (
      <div className="modal-content">
          <h4 className="center">Sign In</h4>

          <div className="row">
            <div className="col offset-l2 col l8 m8 s12">
              <label>Sign in as ... </label>
              <br></br>
              <SelectField value={this.state.platform} onChange={this.getPlatform}>
                <MenuItem value={'/BuilderTemplate'} primaryText="Builder"/>
                <MenuItem value={'/SBSPTemplate'}  primaryText="Self-build or Small Project"/>
                <MenuItem value={'/CustomerTemplate'}  primaryText="Customer" />
                <MenuItem value={'Lease'}  primaryText="Looking to Lease" disabled/>
                <MenuItem value={'Supplier'}  primaryText="Supplier" disabled/>
                <MenuItem value={'Project'}  primaryText="Project Holder" disabled/>
              </SelectField>
            </div>
          </div>

            <div className="row">
              <div className="input-field offset-l2 col l8 m8 s12">
                <input id="email" type="email" />
                <label className="active">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field offset-l2 col l8 m8 s12">
                <input id="password" type="password" />
                <label className="active">Password</label>
              </div>
            </div>

            <div className="modal-footer">
                <Link to={this.state.platform} className="modal-action modal-close btn center primary-color waves-effect hover-color waves-light">Sign In</Link>
            </div>
        </div>
    );
  }
});

module.exports = SignInModal;
