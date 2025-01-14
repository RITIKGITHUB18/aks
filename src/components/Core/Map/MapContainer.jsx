import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router-dom";
import { location, searchIcon } from "../../../assets/Images";
import { FallingLines } from "react-loader-spinner";

const MapContainer = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const defaultProps = {
    center: { lat: 28.704064, lng: 77.102493 },
    zoom: 10,
  };

  const handleMapClick = ({ lat, lng }) => {
    setSelectedLocation({ lat, lng });
  };

  const handleReturnHome = () => {
    // Start loader when user clicks Select Location
    setLoading(true);

    // Wait for 2 seconds before navigating to home
    setTimeout(() => {
      navigate("/home"); // Navigate to the home page
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <FallingLines
            color="#3579DD"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      )}

      <div className="fixed z-10 mt-14 flex items-center px-4 w-[343px] h-[52px] border-[1px] border-[#202938] bg-[#202938] rounded-[100px]">
        <img
          src={searchIcon}
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
        style={{ width: "430px", height: "100vh", top: "0%" }}
        className="rounded-[24px]"
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            apiKey: "AIzaSyDSQk6HRJopfL9PLPvleonX5-wxWyywQVU",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={handleMapClick}
        />
        <div className="fixed bottom-2 animate-slide-in">
          {showModal && (
            <div className="flex flex-col w-[322px] h-[220px] items-center p-4 bg-[#202938] mt-4 top-[70%] rounded-[14px] justify-center translate-x-[50px]">
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
                    onClick={() => setShowModal(true)}
                    className="border-[0.5px] border-[#4170EB] rounded-[8px] w-[297px] h-[44px] bg-[#202938] mt-4"
                  >
                    Change Location
                  </button>
                  <button
                    onClick={handleReturnHome} // This triggers the loader and navigation
                    className="border-[1px] border-[#4170EB] bg-[#4170EB] rounded-[8px] w-[297px] h-[44px] mt-4"
                  >
                    Select Location
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
