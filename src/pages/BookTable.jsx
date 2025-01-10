import React, { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi"; // Back arrow icon
import { FaPlus } from "react-icons/fa";
import { BookTableImg, cartIcon, affordableImg1, affordableImg2 } from "../assets/Images";

const BookTable = () => {
  const [activeTab, setActiveTab] = useState("dateTime");
  const [selectedDate, setSelectedDate] = useState({
    day: null,
    date: "21",
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    time: "12:00",
  });
  const [showCartButtons, setShowCartButtons] = useState(false); // To control visibility of "Add to Cart" and "Buy Now"

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = ["08:00", "10:00", "12:00", "14:00"];
  const currentMonthName = new Date(selectedDate.year, selectedDate.month).toLocaleString("default", { month: "long" });

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

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const currentDay = new Date(selectedDate.year, selectedDate.month, i + 1);
    return {
      day: days[currentDay.getDay()],
      date: currentDay.getDate(),
    };
  });

  const handleAddToCart = () => {
    setShowCartButtons(true); // Show "Add to Cart" and "Buy Now" when something is added
  };

  const DateTimeComponent = () => (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-white bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700"
        >
          {"<"}
        </button>
        <h3 className="text-lg font-semibold text-white">
          {currentMonthName} {selectedDate.year}
        </h3>
        <button
          onClick={handleNextMonth}
          className="text-white bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700"
        >
          {">"}
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {weekDates.map((weekDate, index) => (
          <button
            key={index}
            onClick={() =>
              setSelectedDate((prev) => ({
                ...prev,
                day: weekDate.day,
                date: weekDate.date,
              }))
            }
            className={`p-2 rounded-lg ${
              selectedDate.date === weekDate.date
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            <p>{weekDate.day}</p>
            <p>{weekDate.date}</p>
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">Select a Time</h3>
      <div className="grid grid-cols-4 gap-4">
        {times.map((time) => (
          <button
            key={time}
            onClick={() =>
              setSelectedDate((prev) => ({ ...prev, time: time }))
            }
            className={`p-2 rounded-lg ${
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

  const PackagesComponent = () => {
    const packages = [
      {
        name: "Bachelor",
        image: affordableImg1,
      },
      {
        name: "Family",
        image: affordableImg2,
      },
    ];

    return (
      <div>
        <h3 className="text-lg font-semibold text-white">Available Packages</h3>
        <div className="space-y-4 mt-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex items-center justify-between  p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <h4 className="font-semibold text-white">{pkg.name}</h4>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 flex items-center border border-blue-500 text-blue-500 rounded-lg bg-transparent hover:bg-gray-800"
              >
                <FaPlus className="mr-2" /> Add
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const DrinksComponent = () => {
    const drinks = [
      {
        name: "JD Cinnamon",
        image: affordableImg1,
      },
      {
        name: "JD Honey",
        image: affordableImg2,
      },
    ];

    return (
      <div>
        <h3 className="text-lg font-semibold text-white">Available Drinks</h3>
        <div className="space-y-4 mt-4">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="flex items-center justify-between  p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <h4 className="font-semibold text-white">{drink.name}</h4>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 flex items-center border border-blue-500 text-blue-500 rounded-lg bg-transparent hover:bg-gray-800"
              >
                <FaPlus className="mr-2" /> Add
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative">
        <img
          src={BookTableImg}
          alt="Restaurant"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-2 left-4 flex items-center space-x-2 justify-between">
          <button className="text-white text-xl bg-gray-800 p-2 rounded-full">
            <HiArrowNarrowLeft />
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <img src={cartIcon} alt="Cart Icon" className="w-[24px] h-[24px]" />
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">AKS Night</h2>
          <p className="text-gray-400">2.8 km away · 16 minutes</p>
        </div>
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full bg-transparent hover:bg-gray-800">
          Message
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-4">Book a Table</h2>
        <div className="flex overflow-x-auto space-x-2  p-2 rounded-xl">
          {[
            { id: "dateTime", label: "Time and Date" },
            { id: "packages", label: "Affordable Package" },
            { id: "drinks", label: "Drinks" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-sm rounded-xl ${
                activeTab === tab.id
                  ? "border border-blue-500 text-blue-500"
                  : "border border-gray-700 text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {activeTab === "dateTime" && <DateTimeComponent />}
        {activeTab === "packages" && <PackagesComponent />}
        {activeTab === "drinks" && <DrinksComponent />}
      </div>

      {/* Add to Cart and Buy Now Buttons */}
      {showCartButtons && (
        <div className="fixed bottom-0  bg-gray-900 p-4 w-[395px]">
          <div className="flex items-center justify-between ">
            <button
              className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              Add to Cart
            </button>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTable;
