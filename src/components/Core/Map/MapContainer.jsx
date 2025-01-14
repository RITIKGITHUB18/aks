import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapContainer = () => {
  const defaultProps = {
    center: { lat: 28.704064, lng: 77.102493 },
    zoom: 10,
  };

  return (
    <div style={{ width: '100%', height: '500px' }}> {/* Ensure the container has height */}
      <GoogleMapReact
        bootstrapURLKeys={{ apiKey: 'AIzaSyDSQk6HRJopfL9PLPvleonX5-wxWyywQVU' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* Add markers or components here if needed */}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
