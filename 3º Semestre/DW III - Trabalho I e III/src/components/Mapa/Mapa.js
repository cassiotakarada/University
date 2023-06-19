import React from 'react';
import { GoogleMap } from 'react-google-maps';

const MapContainer = () => {
  const mapStyles = {        
    height: "100%",
    width: "100%"};

  const defaultCenter = {
    lat: -22.9035, lng: -43.2096
  }
  
  return (
     <>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </>
  )
}

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <MapContainer />
    </div>
  );
}

export default Contato;

