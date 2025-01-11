import { FaPlus } from "react-icons/fa";
import { affordableImg1, affordableImg2 } from "../../assets/Images";

const DrinksComponent = ({ setShowCartButtons }) => {
  const drinks = [
    {
      name: "JD Cinnamon",
      image: affordableImg1,
    },
    {
      name: "JD Honey",
      image: affordableImg2,
    },
    {
      name: "JD Vanilla",
      image: affordableImg1,
    },
    {
      name: "JD Apple",
      image: affordableImg2,
    },
    {
      name: "JD Lemon",
      image: affordableImg1,
    },
    {
      name: "JD Mint",
      image: affordableImg2,
    },
  ];

  const handleAddToCart = () => {
    setShowCartButtons(true);
  };

  return (
    <div className="w-[393px] mx-auto">
      {/* Header */}
      <div className="ml-4">
        <h3 className="text-[14px] font-[500] text-white leading-[18.2px]">
          Available Drinks
        </h3>
      </div>

      {/* Scrollable Drinks List */}
      <div className="mt-4 h-[200px] overflow-y-auto scrollbar-hide space-y-2">
        {drinks.map((drink, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg"
          >
            {/* Drink Image and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={drink.image}
                alt={drink.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <h4 className="font-[500] text-[14px] text-white leading-[18.2px]">
                {drink.name}
              </h4>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 flex items-center text-[12px] leading-[15px] font-[500] border-[1px] border-[#3579DD] text-[#3579DD] rounded-[100px] bg-transparent hover:bg-gray-800"
            >
              <FaPlus className="mr-2" /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksComponent;
