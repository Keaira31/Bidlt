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
        <form>
          <div className="row">
          <div className="input-field col s12 l6 left-align">
            <p>Trade</p>
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
          </div>
        </div>
          <div className="row">
          <div className="input-field col s12 l6 left-align">
            <p>Job Type</p>
            <select>
              <option selected value="" disabled>Select Your Job Type</option>
              <option value="all">All</option>
              <option value="tlc">TLC</option>
              <option value="self-build">Self Build</option>
              <option value="small-project">Small Project</option>
            </select>
          </div>
        </div>
        <div className="row">
      <div className="col s12 l6">
        <p>Job Proximity</p>
        <p className="range-field">
          <input type="range" id="test5" min="0" max="50" />
        </p>
      </div>
    </div>
    </form>
    </div>

    );
  }
});

module.exports = JobSearch;
