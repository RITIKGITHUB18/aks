// Packages Component
const PackagesComponent = () => {
    const packages = [
      {
        name: "Bachelor",
        image: affordableImg1, // Image imported from your assets
      },
      {
        name: "Family",
        image: affordableImg2, // Image imported from your assets
      },
    ];
  
    return (
      <div>
        <h3 className="text-lg font-semibold text-white">Available Packages</h3>
        <div className="space-y-4 mt-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <h4 className="font-semibold text-white">{pkg.name}</h4>
              </div>
              <button className="px-4 py-2 flex items-center border border-blue-500 text-blue-500 rounded-lg bg-transparent hover:bg-gray-800">
                <FaPlus className="mr-2" /> Add
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  