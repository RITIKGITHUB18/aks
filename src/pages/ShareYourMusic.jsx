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
    <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white flex flex-col items-center justify-center">
      {/* Main Container */}
      <div className="w-full max-w-md mx-auto px-4 pt-10 pb-16">
        {/* Title Section */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Share your Music</h1>
          <p className="text-gray-400 mt-1">What do you feel like today?</p>
        </div>

        {/* Search Input */}
        <div className="mb-6">
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

        {/* Playlists Section */}
        <div className="mb-6">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
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

        {/* Favorites Section */}
        <div className="w-full px-2">
          <Favorites songs={songs} />
        </div>
      </div>

      {/* Footer (Sticky at bottom) */}
      <div className="mt-auto sticky bottom-0 z-10 w-full bg-[#090D14] border-t border-[#202938] py-2 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default ShareYourMusic;
