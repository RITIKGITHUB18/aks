import { useEffect, useState } from "react";
import { arrowRightIcon, locationIcon } from "../../assets/Images";
import { useDispatch } from "react-redux";
import { setLocation } from "../../slice/locationSlice";

const GetLocation = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        // 1) Fetch IP Address of the user
        const ipResponse = await fetch("https://api.ipify.org");
        const ip = await ipResponse.text();
        setIpAddress(ip);

        // 2) Fetch geolocation with the help of user's ip
        const locationResponse = await fetch(`http://ip-api.com/json/${ip}`);
        const locationData = await locationResponse.json();
        console.log("locationData:", locationData);
        setGeoInfo(locationData);

        // 3) Dispatch for storing the location detail inside the redux state
        if (locationData.status === "success") {
          dispatch(
            setLocation({
              lat: locationData.lat,
              lon: locationData.lon,
              city: locationData.city,
              country: locationData.country,
            })
          );
        }
      } catch (error) {
        console.error("Error getting location:", error);
      }
    })();
  }, [dispatch]);

  // const handleLocationClick = () => {
  //   // Optional: navigate to map or do something with lat/lon
  //   navigate("/map", { state: { lat: geoInfo.lat, lon: geoInfo.lon } });
  // };

  return (
    <div>
      <div
        // onClick={handleLocationClick}
        className="relative mx-auto bg-[#161C25] rounded-full w-full max-w-[350px] h-16 cursor-pointer shadow-md flex items-center border-2 border-[#202938] px-4 my-7"
      >
        <img
          src={locationIcon}
          className="w-12 h-12 mr-2 transition-transform translate-y-1"
          alt="Location Icon"
        />
        <div className="flex-1">
          <p className="font-medium">Your Location</p>
          {geoInfo.country && (
            <p className="text-sm text-gray-400 truncate">
              {geoInfo.city} {geoInfo.country}
            </p>
          )}
        </div>
        <img src={arrowRightIcon} className="w-4 h-4 ml-2" alt="Arrow Right" />
      </div>
    </div>
  );
};

export default GetLocation;
