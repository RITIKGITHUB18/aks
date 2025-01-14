// components/SongItem.js
import React from "react";

const SongItem = ({ image, title, artist, duration }) => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-x-2">
        <div
          className="w-12 h-12 rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="ml-4">
          <p className="text-white font-semibold">{title}</p>
          <p className="text-gray-400 text-sm">{artist}</p>
        </div>
      </div>
      <div className="ml-8 translate-x-[15px]">
        <p className="text-gray-400 text-sm">{duration}</p>
      </div>
    </div>
  );
};

export default SongItem;
