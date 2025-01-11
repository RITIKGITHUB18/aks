const CheckoutCard = ({ checkoutData }) => {
  return (
    <div className="bg-[090D14] rounded-lg p-4 ">
      {checkoutData.map((data) => (
        <div
          key={data.id}
          className="flex items-center justify-between border-b border-gray-700 py-4 last:border-b-0"
        >
          {/* Image */}
          <div className="w-12 h-12 bg-gray-300 rounded-lg flex-shrink-0">
            <img
              src={data.itemImg}
              alt={data.itemName}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 mx-4">
            <p className="text-white text-sm font-semibold">{data.itemName}</p>{" "}
            <p className="text-gray-400 text-xs">{data.qty}x item</p>{" "}
          </div>

          <div>
            <p className="text-white text-sm font-semibold">${data.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCard;
