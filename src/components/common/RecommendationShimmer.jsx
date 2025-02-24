import React from "react";

const RecommendationShimmer = () => {
  return (
    <div className="relative flex flex-col w-[17rem] h-auto rounded-[12px] px-2 animate-pulse">
      {/* Image Placeholder */}
      <div className="relative w-full h-[142px] bg-[#2B2B2B] rounded-[12px]" />

      {/* Hotel Details Placeholder */}
      <div className="flex flex-col w-full px-4 mt-2 gap-2">
        {/* Hotel Name and Rating */}
        <div className="flex justify-between items-center">
          {/* Left side (hotel name, rating) */}
          <div>
            {/* Placeholder for name */}
            <div className="h-4 bg-[#2B2B2B] rounded w-24 mb-2" />

            {/* Row for rating & distance */}
            <div className="flex items-center gap-2">
              {/* Star + rating placeholder */}
              <div className="h-3 w-10 bg-[#2B2B2B] rounded" />
              {/* distance placeholder */}
              <div className="h-3 w-12 bg-[#2B2B2B] rounded" />
            </div>
          </div>

          {/* Price */}
          <div className="h-4 bg-[#2B2B2B] rounded w-10" />
        </div>
      </div>
    </div>
  );
};

export default RecommendationShimmer;
