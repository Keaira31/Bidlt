var React = require('react');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
var url = require("file?name=picture.png!./spanner1.png");


var Markers = {
             markers:[{
               position: {
                 lat: 51.529571,
                 lng: -0.042356
               },
               key: "1",
               defaultAnimation: 2,
             },{
               position: {
                 lat: 51.533523,
                 lng: -0.287018
               },
               key: "2",
               defaultAnimation: 2
             },{
               position: {
                 lat: 51.560851,
                 lng: -0.085144
               },
               key: "3",
               defaultAnimation: 2
             },{
               position: {
                 lat: 51.467697,
                 lng: -0.064545
               },
               key: "4",
               defaultAnimation: 2
             },{
               position: {
                 lat: 51.49079,
                 lng: 0.083771
               },
               key: "5",
               defaultAnimation: 2
             }],
             canSubmit: false
    }
var OverviewGoogleMap = React.createClass({


  componentDidMount(){

  },
  render: function(){
    return (
        <div className="row main-padding margin-30 center-align">
            <div className="component-title-box">
              <h5>Available Jobs</h5>
            </div>

          <section style={{height: "25em"}}>
            <GoogleMapLoader
               containerElement={<div style={{height: "25em"}}></div>}
               googleMapElement={
                 <GoogleMap ref={map => ("GoogleMap", map)} defaultZoom={11} options={{ scrollwheel: false}} defaultCenter={{lat:51.529571, lng: -0.042356}}  >
                   {Markers.markers.map((marker, index) => {
                     return (
                       <Marker {...marker} options={{icon:url}} 	 />
                     );
                   })}
                 </GoogleMap>
               }
            />
          </section>
        </div>
      );
    }
  })


module.exports = OverviewGoogleMap;
