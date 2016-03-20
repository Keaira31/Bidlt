var React = require('react');
var Link = require('react-router').Link




var SideNav = React.createClass({

  componentDidMount () {
    $(".button-collapse").sideNav({
      menuWidth: 200,
      closeOnClick: true
    });
  },

  render: function(){
    var navArray = this.props.navArray;
    var NavItems = navArray.map(function(elem) {
      return (<li key={elem.name}><Link to={elem.url}>{elem.name}<i className="material-icons small right">{elem.icon}</i></Link></li>);
    });

    return (
      <div className="">
        <nav className="primary-color">
          <ul id="slide-out" className="side-nav fixed mobile-slideout">
            <li className="logo center"><Link to='/' className="logo-our">{this.props.interface}</Link></li>
            {NavItems}
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
          </nav>
      </div>
    );
  }
});

module.exports = SideNav;
