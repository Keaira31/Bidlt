var React = require('react');

var JobSearch = React.createClass({
  componentDidMount(){
    $(document).ready(function(){
      $('select').material_select();
    });
  },

  render: function(){
    return (
      <div className="main-padding margin-30">
        <form>
          <div className="input-field">
            <p>Trade</p>
            <select>
              <option selected value="" disabled>Select Your Trade</option>
              <option className="primary-color" value="all">All</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="ground-work">Ground Work</option>
              <option value="carpenter">Carpenter</option>
              <option value="plasterer">Plasterer</option>
              <option value="painter">Painter</option>
              <option value="brick-layer">Brick Layer</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = JobSearch;
