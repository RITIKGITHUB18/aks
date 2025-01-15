import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { navbarData } from "../../data/navbarData";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  const { newOrder } = useSelector((state) => state.checkout);

  const handleNavigation = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

  return (
    <div className="z-10 w-[393px] sm:w-[410px] bg-[#090D14] border-t-[0.75px] border-[#202938] pb-4 pt-3 flex justify-around items-center">
      {navbarData.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigation(tab)}
        >
          <img
            // src={activeTab === tab.name ? tab.activeIcon : tab.inActiveIcon}
            src={activeTab === tab.name ? tab.inActiveIcon : tab.inActiveIcon}
            alt={`${tab.name} Icon`}
            className="w-[24px] h-[24px] mb-1"
          />
          <p
            className={`text-[12px] ${
              // activeTab === tab.name ? "text-[#3579DD]" : "text-[#83858A]"
              activeTab === tab.name ? "text-[#83858A]" : "text-[#83858A]"
            }`}
          >
            {tab.name}
          </p>

          {tab.name === "History" && newOrder && (
            <div className="bg-red-700 w-[14px] h-[14px] fixed flex items-center justify-center rounded-full bottom-0 transform -translate-y-[36px] translate-x-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Footer;
