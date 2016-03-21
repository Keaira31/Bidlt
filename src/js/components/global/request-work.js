var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');



var RequestWork = React.createClass({

  getInitialState: function() {
    return {
      trade: "All"

    };
  },

  getValue: function(event, index, value) {
    this.setState({
      trade: value
    });
  },

  render: function(){
    return (
      <div className="main-padding margin-30">

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

      </div>
    );
  }
});

module.exports = RequestWork;
