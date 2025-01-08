const OAuthLoginComponent = ({ items, style }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center w-[360px] h-[52.46px] bg-[#1E293B] rounded-[24px] ${style} mb-3`}
        >
          <div className="flex items-center">
            <div className="flex pl-8">
              <img src={item.logo} className="w-[25px] h-[25px]" />
            </div>
            <div className="flex mx-auto pr-8">
              <p className="text-[#FFFFFF] font-[500] text-[16.79px] leading-6 space-x-5">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OAuthLoginComponent;
