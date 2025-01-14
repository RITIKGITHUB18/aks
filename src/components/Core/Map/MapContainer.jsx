import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router-dom";
import MapModal from "./MapModal";

import { location, searchIcon } from "../../../assets/Images";

const MapContainer = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const defaultProps = {
    center: { lat: 28.704064, lng: 77.102493 },
    zoom: 10,
  };

  const handleMapClick = ({ lat, lng }) => {
    setSelectedLocation({ lat, lng });
  };

  const handleReturnHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <div className="fixed z-10 mt-14 flex items-center px-4  w-[343px] h-[52px] border-[1px] border-[#202938] bg-[#202938] rounded-[100px]">
        <img
          src={searchIcon}
          // className="w-[20px] h-[20px]"
          style={{
            width: "15px",
            height: "15px",
            marginLeft: "14px",
          }}
        />
        <p className="text-[#83858A] font-400 text-[14px] leading-6 ml-4">
          Search Location
        </p>
      </div>
      <div
        style={{ width: "440px", height: "1200px", top: "0%" }}
        className="rounded-[24px]"
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            apiKey: "AIzaSyDSQk6HRJopfL9PLPvleonX5-wxWyywQVU",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={handleMapClick}
        >
          {/* {selectedLocation && (
          <MapModal lat={selectedLocation.lat} lng={selectedLocation.lng} />
        )} */}
        </GoogleMapReact>

        {showModal && (
          <div className="fixed flex flex-col w-[322px] h-[220px] items-center   p-4 bg-[#202938] mt-4 top-[70%] left-[15%] rounded-[14px]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-x-4 ">
                <span className="" onClick={() => setShowModal(false)}>
                  <img src={location} />
                </span>
                <h2>Mantra Montana Apartment</h2>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-slate-400 font-400 text-[14px] leading-4">
                  Beverly Hills, 90211
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="border-[0.5px] border-[#4170EB] rounded-[8px] w-[297px] h-[44px] bg-[#202938] mt-4"
                >
                  Change Location
                </button>
                <button
                  onClick={handleReturnHome}
                  className="border-[1px] border-[#4170EB] bg-[#4170EB] rounded-[8px] w-[297px] h-[44px] mt-4"
                >
                  Select Location
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MapContainer;
