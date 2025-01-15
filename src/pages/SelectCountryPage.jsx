import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { countryCode } from "../data/countryCode";
import { checked, leftArrow, searchIcon } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";

const SelectCountry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentCountry = location.state?.currentCountry;

  const [search, setSearch] = useState("");
  const [countries] = useState(countryCode);
  const [selectedCountry, setSelectedCountry] = useState(currentCountry || {});

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
    navigate(-1, {
      state: { selectedCountry: currentCountry },
    });
  };

  return (
    <div className="bg-[#090D14] w-[393px] text-white">
      <div
        onClick={handleBack}
        className="rounded-full p-[10px] cursor-pointer mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center"
      >
        <img src={leftArrow} alt="Back" className="w-6 h-6" />
      </div>

      <div className="self-start text-start mt-[32px] mb-[24px] px-5">
        <h1 className="text-[30px] font-[700] leading-[40px] text-white">
          Choose Country
        </h1>
        <p className="text-[#EEEEEE] text-opacity-70 font-[400] text-[16px] leading-[20px]">
          Don't worry! It happens. Please select your country.
        </p>
      </div>

      <div className="relative mb-4 mt-6 px-5">
        <img
          src={searchIcon}
          alt="Search"
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-[16px] h-[16px]"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Country"
          className="w-full bg-white text-slate-800 pl-10 py-3 rounded-md focus:outline-none"
        />
      </div>

      {selectedCountry.name && (
        <div
          className="flex relative items-center p-4 mb-4 mx-5 bg-[#3579DD] text-white rounded-md scrollbar-hide"
          key={selectedCountry.code2l}
        >
          <img
            src={selectedCountry.emoji}
            alt={selectedCountry.name}
            className="w-6 h-6 mr-4 "
          />
          <p>{selectedCountry.name}</p>
          <p className="px-2">({selectedCountry?.dialingCode})</p>
          <div className="absolute flex items-center justify-center rounded-full transform translate-x-[300px] bg-blue-700 w-[22px] h-[22px] p-1">
            <img src={checked} className="w-[16px] h-[16px] items-center" />
          </div>
        </div>
      )}

      <div className="h-[300px] overflow-y-auto px-5 scrollbar-hide">
        {filteredCountries.map((country) => (
          <div
            key={country.code2l}
            className={`flex items-center p-4 border-b border-gray-900 cursor-pointer  ${
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
            <p className="px-2">({country?.dialingCode})</p>
          </div>
        ))}
      </div>
      <div className="px-5">
        <CustomButton
          onClick={handleContinue}
          text="Continue"
          buttonStyle="w-full h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white rounded-[24px] font-[600] mt-8"
        />
      </div>
    </div>
  );
};

export default SelectCountry;
