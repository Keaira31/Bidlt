var React = require('react');
var Link = require('react-router').Link




var SideNav = React.createClass({

  componentDidMount () {
    $(".button-collapse").sideNav();
    console.log('hello side navvvv');
  },

  render: function(){
    var navArray = this.props.navArray;
    var NavItems = navArray.map(function(elem) {
      return (<li key={elem.name}><Link to={elem.url}>{elem.name}</Link></li>);
    });

    return (
      <div className="">
        <nav>
          <ul id="slide-out" className="side-nav fixed">
            <li className="logo center"><Link to='/' className="logo-our">BIDLT</Link></li>
            {NavItems}
          </ul>
          <ul id="slide-out" className="side-nav mobile-slideout">
            {NavItems}
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
        </nav>
      </div>
    );
  }
});

module.exports = SideNav;
