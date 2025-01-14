import React from "react";

const MapModal = ({ lat, lng }) => {
  return (
    <div>
      <div>Your selected location:</div>
      <div>Latitude: {lat}</div>
      <div>Longitude: {lng}</div>
    </div>
  );
};

export default MapModal;
