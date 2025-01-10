import React, { useState } from "react";

const FoodCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex gap-4  text-white py-4 rounded-xl shadow-md  w-full px-4">
      {/* Image Section */}
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-col w-[70%]">
        <div className="flex-col ml-4">
          <h3 className="text-base font-medium">{item.name}</h3>
          <p className="text-sm text-gray-400 mt-2">{item.description}</p>
        </div>
        <div className="flex justify-between py-3">
          <p className="text-xl font-semibold mt-2 px-4">${item.price}</p>
          <div className="flex items-center bg-[#161C25] rounded-full px-1 py-2 gap-3 border-[#202938] border-[1px]">
            <button
              className="text-lg  hover:text-white rounded-full bg-black text-blue-500  px-2 border-[#202938] border-[1px]"
              onClick={decrement}
            >
              −
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              className="text-lg  hover:text-white rounded-full bg-black text-blue-500 px-2 border-[#202938] border-[1px]"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
