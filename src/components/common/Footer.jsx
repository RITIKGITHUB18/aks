import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navbarData } from "../../data/navbarData";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  const handleNavigation = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

  return (
    <div className="fixed bottom-0 w-[393px] bg-[#090D14] border-t-[1px] boder-[#202938] py-3 flex justify-around items-center">
      {navbarData.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigation(tab)}
        >
          <img
            src={activeTab === tab.name ? tab.activeIcon : tab.inActiveIcon}
            alt={`${tab.name} Icon`}
            className="w-[24px] h-[24px] mb-1"
          />
          <p
            className={`text-[12px] ${
              activeTab === tab.name ? "text-white" : "text-gray-400"
            }`}
          >
            {tab.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
