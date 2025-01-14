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
    <>
      <div className="z-10 w-[393px] bg-[#090D14] border-t-[0.75px] border-[#202938] pb-4 pt-4 flex justify-around items-center">
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
                activeTab === tab.name ? "text-[#3579DD]" : "text-[#83858A]"
              }`}
            >
              {tab.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
