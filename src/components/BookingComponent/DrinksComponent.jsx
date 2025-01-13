import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { addDrink, removeDrink } from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const DrinksComponent = ({ drinksInfo }) => {
  const dispatch = useDispatch();
  const { selectedDrinks } = useSelector((state) => state.cart); // Access drinks state from Redux
  // Initialize quantities
  const [drinkQuantities, setDrinkQuantities] = useState(() =>
    drinksInfo.map((drink) => {
      const selectedDrink = selectedDrinks.find((sd) => sd.id === drink.id);
      return selectedDrink ? selectedDrink.quantity : 0;
    })
  );

  // Sync quantities when `selectedDrinks` or `drinksInfo` changes
  useEffect(() => {
    setDrinkQuantities(() =>
      drinksInfo.map((drink) => {
        const selectedDrink = selectedDrinks.find((sd) => sd.id === drink.id);
        return selectedDrink ? selectedDrink.quantity : 0;
      })
    );
  }, [selectedDrinks, drinksInfo]);

  // Increment drink quantity
  const incrementDrink = (index) => {
    const drink = drinksInfo[index];
    dispatch(addDrink(drink)); // Dispatch addDrink action
  };

  // Decrement drink quantity
  const decrementDrink = (index) => {
    const drink = drinksInfo[index];
    dispatch(removeDrink(drink)); // Dispatch removeDrink action
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
        {drinksInfo.map((drink, index) => (
          <div
            key={drink.id}
            className="flex items-center justify-between p-4 rounded-lg"
          >
            {/* Drink Image and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={drink.itemImg}
                alt={drink.itemName}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <h4 className="font-[500] text-[14px] text-white leading-[18.2px]">
                {drink.itemName}
              </h4>
            </div>

            {/* Add/Quantity Buttons */}
            {drinkQuantities[index] > 0 ? (
              <div className="relative flex items-center justify-center w-[75px] h-[30px] bg-[#161C25] rounded-[56px] px-1 py-2 border-[#202938] border-[1px]">
                <button
                  className="absolute flex items-center justify-center text-lg hover:text-white w-[24px] h-[24px] rounded-full bg-black text-blue-500 p-2  border-[#202938] border-[1px] transform -translate-x-[22px]"
                  onClick={() => decrementDrink(index)}
                >
                  <p className="w-[16px] h-[16px] transform translate-x-[0.5px] -translate-y-[5.5px]">
                    -
                  </p>
                </button>
                <span className="text-lg font-medium">
                  {drinkQuantities[index]}
                </span>
                <button
                  className="absolute flex text-lg hover:text-white w-[24px] h-[24px] rounded-full bg-black text-blue-500 px-2  border-[#202938] border-[1px] transform  translate-x-[21.5px]"
                  onClick={() => incrementDrink(index)}
                >
                  <p className="w-[16px] h-[16px] transform -translate-x-[1.5px] -translate-y-[2.5px]">
                    +
                  </p>
                </button>
              </div>
            ) : (
              <button
                onClick={() => incrementDrink(index)}
                className="px-4 py-2 flex items-center text-[12px] leading-[15px] font-[500] border-[1px] border-[#3579DD] text-[#3579DD] rounded-[100px] bg-transparent hover:bg-gray-800 "
              >
                <FaPlus className="mr-2" /> Add
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksComponent;
