import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
  
};

const center = {
  lat: 23.30132,
  lng: 90.41505
};

const CoverageMap = () => {
    const apiKey = ""
    return (
        <LoadScript
      googleMapsApiKey= "AIzaSyDJSj2pHdwynHgQPOT2OCcWjU9-025vPII"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
       
        <></>
      </GoogleMap>
    </LoadScript>
    );
};

export default CoverageMap;