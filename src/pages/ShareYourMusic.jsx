import React, { useState } from "react";
import {
  leftArrow,
  Playlist01,
  Playlist02,
  Song01,
  Song02,
  Song03,
  Song04,
} from "../assets/Images";
import Footer from "../components/common/Footer";
import { Link, useNavigate } from "react-router-dom";
import Favorites from "../components/MusicComponent/Favorites";
import PlaylistItem from "../components/MusicComponent/PlaylistItem";
import { navbarData } from "../data/navbarData";

const ShareYourMusic = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const songs = [
    {
      image: Song01,
      title: "Bye Bye",
      artist: "Marshmello, Juice WRLD",
      duration: "2:09",
    },
    {
      image: Song02,
      title: "I Like You",
      artist: "Post Malone, Doja Cat",
      duration: "4:03",
    },
    {
      image: Song03,
      title: "2 AM",
      artist: "Arizona Zervas",
      duration: "3:03",
    },
    {
      image: Song04,
      title: "True Love",
      artist: "Kanye West",
      duration: "4:52",
    },
  ];

  const handleNavigation = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

  const playlists = [
    {
      image: Playlist01,
      title: "R&B Playlist",
      description: "Chill your mind",
    },
    { image: Playlist02, title: "Daily Mix 2", description: "Made for you" },
    { image: Playlist01, title: "Hip-Hop Beats", description: "Feel the vibe" },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white flex flex-col items-center">
      <div>
        {/* <Link to="/home">
          <div className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center -translate-y-[500px] translate-x-[40px]">
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
        </Link> */}

        <div className="self-start w-[430px] flex flex-col items-center justify-center font-openSans mb-5 mt-10">
          <div className="flex flex-col self-start py-3 px-8">
            <h1 className="text-2xl font-bold ">Share your Music</h1>
            <p className="text-gray-400 mt-1">What do you feel like today?</p>
          </div>

          <div className="px-3 mb-4 w-[390px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search song, playlist, artist..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-gray-300 rounded-lg outline-none placeholder-gray-500"
              />
              <svg
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>

          {/* Playlists */}
          <div className="pl-3">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide w-[calc(2*11rem+8px)]">
              {playlists.map((playlist, index) => (
                <PlaylistItem
                  key={index}
                  image={playlist.image}
                  title={playlist.title}
                  description={playlist.description}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center w-[380px] px-4">
            <Favorites songs={songs} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-[#090D14] w-[430px]">
        <div className="z-10 w-[393px] sm:w-[410] bg-[#090D14] border-t-[0.1px] border-[#202938] pb-4 pt-3 flex justify-around items-center translate-x-[20px]">
          {navbarData.map((tab) => (
            <div
              key={tab.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleNavigation(tab)}
            >
              <img
                // src={activeTab === tab.name ? tab.activeIcon : tab.inActiveIcon}
                src={
                  activeTab === tab.name ? tab.inActiveIcon : tab.inActiveIcon
                }
                alt={`${tab.name} Icon`}
                className="w-[24px] h-[24px] mb-1"
              />
              <p
                className={`text-[12px] ${
                  activeTab === tab.name ? "text-[#83858A]" : "text-[#83858A]"
                  // activeTab === tab.name ? "text-[#3579DD]" : "text-[#83858A]"
                }`}
              >
                {tab.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareYourMusic;
