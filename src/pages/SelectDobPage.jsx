import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";
import { leftArrow } from "../assets/Images";
import { dateData, monthData, yearData } from "../data/dobData";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../slice/userSlice";
import { supabase } from "../helper/supabaseConfig";

const SelectDob = () => {
  const [selectedMonth, setSelectedMonth] = useState("MM");
  const [selectedDate, setSelectedDate] = useState("DD");
  const [selectedYear, setSelectedYear] = useState("YYYY");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const isDobValid = () =>
    selectedMonth !== "MM" && selectedDate !== "DD" && selectedYear !== "YYYY";

  const dobFormat = () => {
    const dob = `${selectedDate}-${selectedMonth}-${selectedYear}`;
    return dob;
  };

  const handleDobSubmit = async () => {
    if (!isDobValid()) return;
    const dobValue = dobFormat();
    dispatch(updateUser({ dob: dobValue }));

    try {
      const { data: userResponse, error: getUserError } =
        await supabase.auth.getUser();

      if (getUserError || !userResponse?.user) {
        console.error("Error fetching user from Supabase:", getUserError);
        alert("Could not fetch current user from Supabase.");
        return;
      }

      const phone = user?.phone;
      console.log("user: ", user);
      console.log("Phone: ", phone);

      const supabaseUser = userResponse.user;
      console.log("supabase: ", supabaseUser);

      const oldRawMeta = supabaseUser.user_metadata?.raw_user_meta_data || {};
      const profile_pic = supabaseUser?.user_metadata?.avatar_url;
      console.log(supabaseUser.user_metadata);
      dispatch(updateUser({ profile_pic: profile_pic }));
      console.log("oldRawMeta: ", oldRawMeta);
      const newRawMeta = {
        ...oldRawMeta,
        ...user,
        profile_pic: profile_pic,
        dob: dobValue,
        phone: phone,
      };

      console.log("newRawMeta: ", newRawMeta);

      // 4. Update raw_user_meta_data in Supabase with the merged object
      const { data: updateData, error: updateError } =
        await supabase.auth.updateUser({
          data: {
            userPersonalData: newRawMeta,
          },
        });

      if (updateError) {
        console.error("Supabase updateUser error:", updateError);
        alert("Failed to update your profile in raw_user_meta_data.");
        return;
      }

      console.log("Supabase updateUser success:", updateData);
      navigate("/home");
    } catch (err) {
      console.error("Error updating raw_user_meta_data:", err);
      alert("Something went wrong while updating your profile.");
    }
  };
  return (
    <div className="bg-[#090D14] min-h-screen w-full text-white flex flex-col items-center px-4 mt-[14px]">
      {/* Back Button */}
      <Link to="/verify-phone" className="self-start ml-4">
        <div className="rounded-full p-3 hover:bg-gray-600 w-11 h-11 bg-[#090D14] border border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      {/* Header Section */}
      <div className="text-start mt-6 mb-4 px-4">
        <h1 className="text-2xl font-bold leading-8 text-white mb-4">DOB</h1>
        <p className="text-[#EEEEEE] text-start text-opacity-70 text-lg leading-6">
          Share your DOB with us to get special offers
        </p>
      </div>

      {/* Dropdowns Section */}
      <div className="w-full max-w-[320px] flex flex-col gap-4 mt-4">
        <div className="flex gap-4 justify-center">
          {/* Select Date */}
          <div className="relative w-1/3">
            <select
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full h-12 bg-[#090D14] text-white rounded-md px-4 cursor-pointer border-[1px] border-[#3579DD] focus:outline-none focus:ring-2 focus:ring-[#3579DD] appearance-none"
            >
              <option value="DD" disabled>
                DD
              </option>
              {dateData.map((date) => (
                <option
                  key={date.date}
                  value={date.date}
                  className="bg-white text-black"
                >
                  {date.date}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Select Month */}
          <div className="relative w-1/3">
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="w-full h-12 bg-[#090D14] text-white rounded-md px-4 cursor-pointer border-[1px] border-[#3579DD] focus:outline-none focus:ring-2 focus:ring-[#3579DD] appearance-none"
            >
              <option value="MM" disabled>
                MM
              </option>
              {monthData.map((month) => (
                <option
                  key={month.month}
                  value={month.month}
                  className="bg-white text-black"
                >
                  {month.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Select Year */}
          <div className="relative w-1/3">
            <select
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full h-12 bg-[#090D14] text-white rounded-md px-4 cursor-pointer border-[1px] border-[#3579DD] focus:outline-none focus:ring-2 focus:ring-[#3579DD] appearance-none"
            >
              <option value="YYYY" disabled>
                YYYY
              </option>
              {yearData.map((year) => (
                <option
                  key={year.year}
                  value={year.year}
                  className="bg-white text-black"
                >
                  {year.year}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 px-4">
          <CustomButton
            onClick={handleDobSubmit}
            style="w-full rounded-[24px]"
            text="Continue"
            buttonStyle={`w-full h-14 rounded-[24px] font-semibold ${
              isDobValid()
                ? "bg-[#3579DD] hover:bg-blue-600 text-white"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
            disabled={!isDobValid()}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDob;
