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
               defaultAnimation: 2
             }],
             canSubmit: false
    }
var OverviewGoogleMap = function (props) {

  return (
    <div className="">
        <div className="component-title-box">
          
        </div>

      <section style={{height: "25em"}}>
        <GoogleMapLoader
           containerElement={<div {...props} style={{height: "25em"}}/>}
           googleMapElement={
             <GoogleMap ref={map => ("GoogleMap", map)}  defaultZoom={11} defaultCenter={{lat:51.529571, lng: -0.042356}}  >
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
