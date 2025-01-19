import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
// import { useCart } from "../common/CartContext";
import { addPackage, removePackage } from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const PackagesComponent = ({ packagesInfo }) => {
  const dispatch = useDispatch();

  const { selectedPackages } = useSelector((state) => state.cart); // Access cart state from Redux

  const [quantities, setQuantities] = useState(() =>
    packagesInfo.map((pkg) => {
      const selectedPkg = selectedPackages.find((sp) => sp.id === pkg.id);
      return selectedPkg ? selectedPkg.quantity : 0;
    })
  );

  // Update quantities when `selectedPackages` or `packagesInfo` changes
  useEffect(() => {
    setQuantities(() =>
      packagesInfo.map((pkg) => {
        const selectedPkg = selectedPackages.find((sp) => sp.id === pkg.id);
        return selectedPkg ? selectedPkg.quantity : 0;
      })
    );
  }, [selectedPackages, packagesInfo]);

  // Increment quantity
  const increment = (index) => {
    const pkg = packagesInfo[index];
    console.log("pkg: ", pkg);
    dispatch(addPackage(pkg));
  };

  // Decrement quantity
  const decrement = (index) => {
    const pkg = packagesInfo[index];
    dispatch(removePackage(pkg));
  };

  return (
    <div className="w-[393px] mx-auto scrollbar-hide">
      {/* Header */}
      <div className="ml-4">
        <h3 className="text-[14px] font-[500] text-white leading-[18.2px]">
          Available Packages
        </h3>
      </div>

      {/* Packages List */}
      <div className="mt-4 h-auto overflow-y-auto scrollbar-hide space-y-2">
        {packagesInfo.map((pkg, index) => (
          <div key={pkg.id} className="flex items-center justify-between p-4">
            {/* Package Image and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <h4 className="font-[500] text-[14px] text-white leading-[18.2px]">
                {pkg.name}
              </h4>
            </div>

            {/* Add/Quantity Buttons */}
            {quantities[index] > 0 ? (
              <div className="relative flex items-center justify-center w-[75px] h-[30px] bg-[#161C25] rounded-[56px] px-1 py-2 border-[#202938] border-[1px] cursor-pointer">
                <button
                  className="absolute flex items-center justify-center text-lg hover:text-white w-[24px] h-[24px] rounded-full bg-black text-blue-500 p-2  border-[#202938] border-[1px] transform -translate-x-[22px]"
                  onClick={() => decrement(index)}
                >
                  <p className="w-[16px] h-[16px] transform translate-x-[0.5px] -translate-y-[5.5px]">
                    -
                  </p>
                </button>
                <span className="text-lg font-medium">{quantities[index]}</span>
                <button
                  className="absolute flex text-lg hover:text-white w-[24px] h-[24px] rounded-full bg-black text-blue-500 px-2  border-[#202938] border-[1px] transform  translate-x-[21.5px]"
                  onClick={() => increment(index)}
                >
                  <p className="w-[16px] h-[16px] transform -translate-x-[1.5px] -translate-y-[2.5px]">
                    +
                  </p>
                </button>
              </div>
            ) : (
              <button
                onClick={() => increment(index)}
                className="px-4 py-2 flex items-center text-[12px] leading-[15px] font-[500] border-[1px] border-[#3579DD] text-[#3579DD] rounded-[100px] bg-transparent hover:bg-gray-800"
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

export default PackagesComponent;
