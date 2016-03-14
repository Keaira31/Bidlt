var React = require('react');

var JobSearch = React.createClass({
  componentDidMount(){
    $(document).ready(function(){
      $('select').material_select();
    });
  },

  render: function(){
    return (
      <div className="main-padding margin-30 row">
        <div className="component-title-box">
        <h5 className="center-align"> Available Jobs </h5>
        </div>
        <form>
          <div className="row">
          <div className="input-field col s12 l6 left-align">
            <select>
              <option selected value="" disabled>Select Your Trade</option>
              <option value="all">All</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="ground-work">Ground Work</option>
              <option value="carpenter">Carpenter</option>
              <option value="plasterer">Plasterer</option>
              <option value="painter">Painter</option>
              <option value="brick-layer">Brick Layer</option>
            </select>
            <label>Trade</label>
          </div>
        </div>
          <div className="row">
          <div className="input-field col s12 l6 left-align">
            <select>
              <option selected value="" disabled>Select Your Job Type</option>
              <option value="all">All</option>
              <option value="tlc">TLC</option>
              <option value="self-build">Self Build</option>
              <option value="small-project">Small Project</option>
            </select>
            <label>Job Type</label>
          </div>
        </div>
        <div className="row">
      <div className="col s12 l6">
        <label>Job Proximity</label>
        <p className="range-field">
          <input type="range" id="test5" min="0" max="50" />
        </p>
      </div>
    </div>
    <div className="row right-align">
      <div className="col s12 l6 right-align">
    <button className=" darkest-color btn waves-effect waves-light" type="submit" name="action">Search
      <i className="material-icons right">search</i>
    </button>
    </div>
  </div>
    </form>
    </div>

    );
  }
});

module.exports = JobSearch;
