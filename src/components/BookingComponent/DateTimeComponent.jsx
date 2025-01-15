import React, { useEffect, useState } from "react";
// import { useCart } from "../common/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { setDateTime } from "../../slice/hotelSlice";

const DateTimeComponent = () => {
  const dispatch = useDispatch();
  const { dateTime } = useSelector((state) => state.hotel); // Access dateTime from Redux state

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const times = [
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
  ];

  const [selectedDate, setSelectedDate] = useState({
    day: dateTime?.day || null,
    date: dateTime?.date || new Date().getDate(),
    month: dateTime?.month || new Date().getMonth(),
    year: dateTime?.year || new Date().getFullYear(),
    time: dateTime?.time || "",
  });

  useEffect(() => {
    if (dateTime) {
      setSelectedDate(dateTime);
    }
  }, [dateTime]);

  const getDatesForMonth = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return {
        day: days[date.getDay()],
        date: date.getDate(),
      };
    });
  };

  const allDates = getDatesForMonth(selectedDate.month, selectedDate.year);

  const currentMonthName = new Date(
    selectedDate.year,
    selectedDate.month
  ).toLocaleString("default", { month: "long" });

  const handleNextMonth = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev.year, prev.month + 1);
      return {
        ...prev,
        month: newDate.getMonth(),
        year: newDate.getFullYear(),
      };
    });
  };

  const handlePrevMonth = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev.year, prev.month - 1);
      return {
        ...prev,
        month: newDate.getMonth(),
        year: newDate.getFullYear(),
      };
    });
  };

  const handleDateSelection = (day, date) => {
    const updatedDate = { ...selectedDate, day, date };
    setSelectedDate(updatedDate);
    dispatch(setDateTime(updatedDate)); // Update Redux state
  };

  const handleTimeSelection = (time) => {
    const updatedDate = { ...selectedDate, time };
    setSelectedDate(updatedDate);
    dispatch(setDateTime(updatedDate)); // Update Redux state
  };
  return (
    <div className="w-[390px] mx-auto relative">
      <div className="flex items-center justify-center mb-4 px-4 cursor-pointer">
        <button
          onClick={handlePrevMonth}
          className="text-white px-3 rounded-lg -translate-x-[30px]"
        >
          {"<"}
        </button>
        <h3 className="text-[14px] font-[700] text-white">
          {currentMonthName} {selectedDate.year}
        </h3>
        <button
          onClick={handleNextMonth}
          className="text-white px-3 rounded-lg  translate-x-[30px]"
        >
          {">"}
        </button>
      </div>

      <div className="flex w-[342px] mx-5 overflow-x-auto gap-x-4 px-2 mb-6 scrollbar-hide cursor-pointer">
        {allDates.map((weekDate, index) => (
          <button
            key={index}
            onClick={() => handleDateSelection(weekDate.day, weekDate.date)}
            className={`flex-shrink-0 w-[70px] h-[60px] rounded-lg p-2 text-center ${
              selectedDate.date === weekDate.date
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            <p className="text-sm font-semibold">{weekDate.day}</p>
            <p className="text-lg font-bold">{weekDate.date}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 rounded-[8px] w-[342px] mx-5 px-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelection(time)}
            className={`p-2 rounded-lg text-[14px] font-[400] leading-5 ${
              selectedDate.time === time
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateTimeComponent;
