import React, { useState } from "react";

const DateTimeComponent = () => {
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
    day: null,
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    time: "12:00",
  });

  // Generate all dates for the selected month
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

  return (
    <div className="w-full max-w-[393px] mx-auto">
      {/* Month and Year Navigation */}
      <div className="flex items-center justify-center mb-4 px-4">
        <button
          onClick={handlePrevMonth}
          className="text-white px-3 rounded-lg fixed -translate-x-[80px]"
        >
          {"<"}
        </button>
        <h3 className="text-[14px] font-[700] text-white">
          {currentMonthName} {selectedDate.year}
        </h3>
        <button
          onClick={handleNextMonth}
          className="text-white px-3 rounded-lg fixed translate-x-[80px]"
        >
          {">"}
        </button>
      </div>

      {/* Scrollable Dates */}
      <div className="flex overflow-x-auto gap-4 px-4 mb-6 scrollbar-hide">
        {allDates.map((weekDate, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDate((prev) => ({
                ...prev,
                day: weekDate.day,
                date: weekDate.date,
              }));
              setShowCartButtons(true);
            }}
            className={`flex-shrink-0 w-[80px] h-[60px] rounded-lg p-2 text-center ${
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

      <div className="grid grid-cols-4 gap-4 rounded-[8px] px-4">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => {
              setSelectedDate((prev) => ({ ...prev, time }));
              setShowCartButtons(true);
            }}
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
