import { cartIcon, homeBg, profileIcon, vibgyorBlub } from "../assets/Images";

const HomePage = () => {
  return (
    <div className="bg-[#090D14] w-[393px] flex flex-col">
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
        className="bg-no-repeat bg-cover bg-center w-full h-[300px] relative"
      >
        {/* Top Bar: Cart and Profile Icons */}
        <div className="absolute flex mt-4 right-2 gap-4  p-4">
          {/* Cart Icon */}
          <div className="flex items-center justify-center w-[44px] h-[44px] border-2 border-slate-500 rounded-full p-[10px]">
            <img src={cartIcon} alt="Cart Icon" className="w-[24px] h-[24px]" />
          </div>
          {/* Profile Icon */}
          <div className="w-[44px] h-[44px]">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Rewards Section */}
        <div className="absolute flex flex-col bottom-[50px] left-1/2 transform -translate-x-1/2 rounded-[16px] w-[350px] p-4 items-center ">
          {/* Vibgyor Icon */}
          <div className="w-[60px] h-[60px]">
            <img
              src={vibgyorBlub}
              alt="Vibgyor Icon"
              className="w-full h-full"
            />
          </div>

          {/* Text and Points */}
          <div className="flex flex-col text-white items-center">
            <h1 className="font-bold text-lg">My Rewards Points</h1>
            <p className="text-sm text-gray-400">Earned Points</p>
            <p className="text-2xl font-bold">3222</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-[80px] px-4 flex-1">
        {/* Swipable Component Placeholder */}
        <div className="bg-[#1C1F26] rounded-[16px] h-[150px] mb-4 shadow-md flex justify-center items-center">
          <p className="text-gray-400">Swipable Component</p>
        </div>

        {/* Location Component Placeholder */}
        <div className="bg-[#1C1F26] rounded-[16px] h-[100px] mb-4 shadow-md flex justify-center items-center">
          <p className="text-gray-400">Location Component</p>
        </div>

        {/* Recommendation Section Placeholder */}
        <div className="bg-[#1C1F26] rounded-[16px] h-[200px] mb-4 shadow-md flex justify-center items-center">
          <p className="text-gray-400">Recommendations for You</p>
        </div>
      </div>

      {/* Navbar Component Placeholder */}
      <div className="bg-[#1C1F26] h-[60px] flex justify-center items-center">
        <p className="text-gray-400">Navbar</p>
      </div>
    </div>
  );
};

export default HomePage;
