var React = require('react');

var JobSearchResult = React.createClass({
  render: function(){
    return (
      <div className="main-padding margin-30">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="http://www.colnbrookcommunityassociation.org.uk/wp-content/uploads/2015/09/Housebuilding.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line
            <br></br>
            Second Line
            </p>
            <p className="primary-text-color secondary-content">distance</p>
          </li>

          <li className="collection-item avatar">
            <img src="http://www.colnbrookcommunityassociation.org.uk/wp-content/uploads/2015/09/Housebuilding.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line
            <br></br>
            Second Line
            </p>
            <p className="primary-text-color secondary-content">distance</p>
          </li>

          <li className="collection-item avatar">
            <img src="http://www.colnbrookcommunityassociation.org.uk/wp-content/uploads/2015/09/Housebuilding.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line
            <br></br>
            Second Line
            </p>
            <p className="primary-text-color secondary-content">distance</p>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = JobSearchResult;
