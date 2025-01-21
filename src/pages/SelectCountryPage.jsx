import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { countryCode } from "../data/countryCode";
import { checked, leftArrow, searchIcon } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import { motion } from "framer-motion";

const SelectCountry = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // If we passed in a "currentCountry" from state, use it; otherwise default to empty object
  const currentCountry = location.state?.currentCountry || {};

  const [search, setSearch] = useState("");
  const [countries] = useState(countryCode);
  const [selectedCountry, setSelectedCountry] = useState(currentCountry);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleContinue = () => {
    navigate("/phone-auth", { state: { selectedCountry } });
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1, { state: { selectedCountry: currentCountry } });
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-[#090D14] min-h-screen w-full text-white"
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-md px-4 py-6 sm:px-6 sm:py-8">
        {/* Back Arrow */}
        <div
          onClick={handleBack}
          className="w-11 h-11 bg-[#090D14] border border-[#202938] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition mb-6"
        >
          <img src={leftArrow} alt="Back" className="w-5 h-5" />
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Choose Country
          </h1>
          <p className="text-sm sm:text-base text-[#EEEEEE]/70 mt-1">
            Don&apos;t worry! It happens. Please select your country.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Country"
            className="w-full bg-white text-black placeholder-gray-500 rounded-md py-3 pl-10 pr-4 focus:outline-none"
          />
        </div>

        {/* Selected Country (if any) */}
        {selectedCountry.name && (
          <div
            className="flex items-center relative p-4 mb-4 bg-[#3579DD] text-white rounded-md"
            key={selectedCountry.code2l}
          >
            <img
              src={selectedCountry.emoji}
              alt={selectedCountry.name}
              className="w-6 h-6 mr-4"
            />
            <p>{selectedCountry.name}</p>
            <p className="px-2">({selectedCountry.dialingCode})</p>
            <div className="absolute right-4 flex items-center justify-center rounded-full bg-blue-700 w-5 h-5 p-1">
              <img src={checked} alt="Selected" className="w-3 h-3" />
            </div>
          </div>
        )}

        {/* Countries List */}
        <div className="max-h-64 overflow-y-auto scrollbar-hide rounded-[24px]">
          {filteredCountries.map((country) => (
            <div
              key={country.code2l}
              className={`flex items-center p-4 border-b border-gray-700 last:border-b-0 cursor-pointer ${
                selectedCountry?.code2l === country.code2l
                  ? "bg-gray-700 bg-opacity-40 text-white rounded-[24px]"
                  : "hover:bg-slate-800 rounded-[24px] text-white"
              }`}
              onClick={() => handleCountryClick(country)}
            >
              <img
                src={country.emoji}
                alt={country.name}
                className="w-6 h-6 mr-4"
              />
              <p>{country.name}</p>
              <p className="px-2">({country.dialingCode})</p>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-6">
          <CustomButton
            onClick={handleContinue}
            text="Continue"
            buttonStyle="w-full h-14 bg-[#3579DD] hover:bg-blue-600 text-white rounded-full font-semibold transition"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SelectCountry;
