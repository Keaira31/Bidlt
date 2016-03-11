var React = require('react');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;


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
var OverviewGoogleMap = function (props) {

  return (
    <div className="row main-padding margin-30 center-align">
        <div className="component-title-box">
          <h5>Available Jobs</h5>
        </div>

      <section style={{height: "25em"}}>
        <GoogleMapLoader
           containerElement={<div {...props} style={{height: "25em"}}/>}
           googleMapElement={
             <GoogleMap ref={map => console.log("GoogleMap", map)}  defaultZoom={11} defaultCenter={{lat:51.529571, lng: -0.042356}}  >
               {Markers.markers.map((marker, index) => {
                 return (
                   <Marker {...marker} />
                 );
               })}
             </GoogleMap>
           }
        />
      </section>
    </div>
  );
}

module.exports = OverviewGoogleMap;
