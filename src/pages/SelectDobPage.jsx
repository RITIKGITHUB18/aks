import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";
import { leftArrow } from "../assets/Images";
import { dateData, monthData, yearData } from "../data/dobData";

const SelectDob = () => {
  const [selectedMonth, setSelectedMonth] = useState("MM");
  const [selectedDate, setSelectedDate] = useState("DD");
  const [selectedYear, setSelectedYear] = useState("YY");
  const navigate = useNavigate();
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleDobSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center">
      {/* Back Button */}
      <Link to="/verify-phone" className="self-start">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      {/* Header Section */}
      <div className="self-start text-start mt-[36px] mb-[24px] px-10">
        <h1 className="text-[30px] font-[700] leading-[40px] text-white">
          DOB
        </h1>
        <p className="text-[#EEEEEE] text-opacity-70 text-[17px] leading-6">
          Share your DOB with us to get special offers
        </p>
      </div>

      {/* Dropdowns Section */}
      <div className="w-[353px] flex flex-col gap-4 mt-7">
        <div className="flex gap-x-5 px-9 mb-5">
          {/* Select Month */}
          <div className="relative">
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="w-[80px] h-[51px] bg-[#090D14] text-white rounded-md px-4 py-2 cursor-pointer border-2 border-[#3579DD] focus:outline-none focus:ring-2 focus:ring-[#3579DD] appearance-none"
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

          {/* Select Date */}
          <div className="relative">
            <select
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-[80px] h-[51px] bg-[#090D14] text-white rounded-md px-4 py-2 cursor-pointer border-2 border-[#3579DD] focus:outline-none focus:ring-2 focus:ring-[#3579DD] appearance-none"
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

          {/* Select Year */}
          <div className="relative">
            <select
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-[88px] h-[51px] bg-[#090D14] text-white rounded-md px-4 py-2 cursor-pointer border-2 border-[#3579DD] focus:outline-none focus:ring-2 focus:ring-[#3579DD] appearance-none"
              style={{
                maxHeight: "100px",
                overflowY: "auto",
              }}
            >
              <option value="YY" disabled>
                YY
              </option>
              {yearData.map((year) => (
                <option
                  key={year.year}
                  value={year.year}
                  className="bg-white text-black h-[80px]"
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
        <div className="mt-5 px-5">
          <CustomButton
            onClick={handleDobSubmit}
            text="Continue"
            buttonStyle="w-[353px] h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white rounded-[24px] font-[600]"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDob;
