import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function GMap() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 14.69872, lng: 121.12606 }}
    >
      <Marker key="batasan" position={{ lat: 14.679486, lng: 121.109826 }} />
      <Marker key="sapang" position={{ lat: 14.692949, lng: 121.125996 }} />
    </GoogleMap>
  );
}

//googleMapAPIKey
const apiKey = "AIzaSyDrMZ-7TEja9Skxb8ZGm6PqLE-j9aOMgRs";

const WrappedMap = withScriptjs(withGoogleMap(GMap));

export default function MapApi() {
  return (
    <div style={{ width: "100vw", height: "90vh", padding: "50px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
