import React from "react";
import { Playlist01, Playlist02, Song01, Song02,Song03,Song04 } from "../assets/Images";

const ShareYourMusic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white font-sans">
      {/* Header Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Share your Music</h1>
        <p className="text-gray-400 mt-1">What do you feel like today?</p>
      </div>

      {/* Search Bar */}
      {/* Search Bar */}
      <div className="px-6 mb-4">
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
<div className="pl-6">
  <div className="flex gap-6 overflow-x-auto scrollbar-hide w-[calc(2*10rem+8px)]">
    {/* Playlist 1 */}
    <div className="flex-shrink-0">
      <div
        className="w-48 h-48 rounded-xl bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${Playlist01})` }}
      ></div>
      <p className="mt-3 text-white font-semibold text-lg">R&B Playlist</p>
      <p className="text-gray-400 text-sm">Chill your mind</p>
    </div>
    {/* Playlist 2 */}
    <div className="flex-shrink-0">
      <div
        className="w-48 h-48 rounded-xl bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${Playlist02})` }}
      ></div>
      <p className="mt-3 text-white font-semibold text-lg">Daily Mix 2</p>
      <p className="text-gray-400 text-sm">Made for you</p>
    </div>
    {/* Playlist 3 */}
    <div className="flex-shrink-0">
      <div
        className="w-48 h-48 rounded-xl bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${Playlist01})` }}
      ></div>
      <p className="mt-3 text-white font-semibold text-lg">Hip-Hop Beats</p>
      <p className="text-gray-400 text-sm">Feel the vibe</p>
    </div>
  </div>
</div>



      {/* Favorites */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-semibold">Your favourites</h2>
        <div className="mt-4 space-y-4 max-h-62 overflow-y-auto scrollbar-hide">
          {/* Song 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${Song01})` }}
              ></div>
              <div className="ml-4">
                <p className="text-white font-semibold">Bye Bye</p>
                <p className="text-gray-400 text-sm">Marshmello, Juice WRLD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">2:09</p>
          </div>

          {/* Song 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${Song02})` }}
              ></div>
              <div className="ml-4">
                <p className="text-white font-semibold">I Like You</p>
                <p className="text-gray-400 text-sm">Post Malone, Doja Cat</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">4:03</p>
          </div>

          {/* Song 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${Song03})` }}
              ></div>
              <div className="ml-4">
                <p className="text-white font-semibold">2 AM</p>
                <p className="text-gray-400 text-sm">Arizona Zervas</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">3:03</p>
          </div>
          {/* Song 4 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${Song04})` }}
              ></div>
              <div className="ml-4">
                <p className="text-white font-semibold">True Love</p>
                <p className="text-gray-400 text-sm">Kanye West</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">4:52</p>
          </div>
          
          {/* Song 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${Song01})` }}
              ></div>
              <div className="ml-4">
                <p className="text-white font-semibold">Bye Bye</p>
                <p className="text-gray-400 text-sm">Marshmello, Juice WRLD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">2:09</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-[355px]  bg-gray-900 py-4">
        <div className="max-w-screen-sm mx-auto flex justify-around items-center">
          <div className="text-center">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M3 10h18m-9 7h9"
              />
            </svg>
            <p className="text-sm text-gray-400">Home</p>
          </div>
          <div className="text-center">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-sm text-gray-400">History</p>
          </div>
          <div className="text-center">
            <svg
              className="w-6 h-6 mx-auto text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-sm text-blue-400">Music</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourMusic;
