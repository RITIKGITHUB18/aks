import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EditIcon,
  leftArrow,
  passwordViewOff,
  // passwordViewOn,
  profileIcon,
} from "../assets/Images";
import CustomButton from "../components/common/CustomButton";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "********",
    dob: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full text-white flex flex-col items-center justify-center">
      {/* Back Button */}
      <Link to="/home" className="self-start ml-4 sm:ml-8">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      <div className="relative flex flex-col items-center justify-center">
        <img src={profileIcon} className="w-[122.13px] h-[122.13px]" />
        <img
          src={EditIcon}
          className="absolute w-[27.24px] h-[27.24px] transform translate-x-[36px] translate-y-[30px] cursor-pointer"
          alt="Edit"
        />
        <p className="text-[17.5px] font-[600] leading-[21px] mt-8">
          GFX Agency
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full px-6 mt-8 flex flex-col gap-6 items-center"
      >
        {/* Email Field */}
        <div className="flex flex-col xs:w-[340px] sm:w-[393px] justify-center">
          <label
            htmlFor="email"
            className="text-white text-sm mb-4 leading-4 font-[600]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#202938] text-white rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col xs:w-[340px] sm:w-[393px]">
          <label
            htmlFor="phone"
            className="text-white text-sm mb-4 leading-4 font-[600]"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#202938] text-white rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* DOB Field */}
        <div className="flex flex-col xs:w-[340px] sm:w-[393px]">
          <label
            htmlFor="dob"
            className="text-white text-sm mb-4 leading-4 font-[600]"
          >
            Date of Birth
          </label>
          <input
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="bg-[#202938] text-white rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col xs:w-[340px] sm:w-[393px]">
          <label
            htmlFor="password"
            className="text-white text-sm mb-4 leading-4 font-[600]"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#202938] text-white rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              required
            />
            <img
              src={showPassword ? passwordViewOff : passwordViewOff}
              alt="Toggle Password View"
              className="absolute top-1/2 transform -translate-y-1/2 right-3 w-6 h-6 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="mb-10 xs:mb-10 w-full max-w-[393px] h-[56px] border border-[#3579DD] text-[#3579DD] rounded-[56px] font-[600] mt-6 leading-6">
          Logout
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
