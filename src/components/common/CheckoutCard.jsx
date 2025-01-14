const CheckoutCard = ({ checkoutData, isLatest }) => {
  return (
    <div className="bg-[#090D14] w-[340px] rounded-lg p-4">
      {/* Conditionally render UPCOMING label if this is the latest order */}
      {isLatest && (
        <div className="flex mb-2">
          <span>Order status</span>
          <span className="bg-green-600 text-[12px] px-2 py-1 rounded-full text-white font-medium translate-x-[140px] visible">
            UPCOMING
          </span>
        </div>
      )}

      {checkoutData.checkedOutItems.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-700 py-4 last:border-b-0"
        >
          {/* Image */}
          <div className="w-12 h-12 bg-gray-300 rounded-lg flex-shrink-0">
            <img
              src={data?.itemImg || data?.image}
              alt={data?.itemName || data?.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 mx-4">
            <p className="text-white text-sm font-[500] leading-[18.2px]">
              {data?.itemName || data?.name}
            </p>
            <p className="text-[#83858A] text-[12px] font-[400] leading-[19.2px]">
              {data.quantity} x items
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm font-[500] leading-[18.2px]">
              ${data.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCard;
