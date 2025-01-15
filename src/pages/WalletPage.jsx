import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { card, leftArrow, more, walletIcon } from "../assets/Images";

const lastTransaction = [
  {
    id: 1,
    TransName: "Delivery Order",
    Date: "Nov 26, 2023 - 12:29",
    amount: "$128",
    icon: card,
  },
  {
    id: 2,
    TransName: "Top Up",
    Date: "Nov 26, 2023 - 13:00",
    amount: "$64",
    icon: card,
  },
  {
    id: 3,
    TransName: "Delivery Order",
    Date: "Nov 27, 2023 - 09:15",
    amount: "$50",
    icon: card,
  },
  {
    id: 4,
    TransName: "Withdrawal",
    Date: "Nov 27, 2023 - 10:05",
    amount: "$200",
    icon: card,
  },
];

const WalletPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#090D14] w-full text-white flex flex-col items-center">
      <div
        onClick={handleBack}
        className="self-start rounded-full mt-[52px] cursor-pointer hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center"
      >
        <img src={leftArrow} alt="Back" className="w-6 h-6" />
      </div>

      <div className="flex flex-col text-start mt-[32px] mb-[24px] border border-[#202938] w-[340px] h-[170px] rounded-[12px] translate-x-2">
        <div className="flex flex-row items-center justify-between mt-2 px-2">
          <img src={walletIcon} className="w-[80px] h-auto" alt="wallet-icon" />
          <img
            src={more}
            className="w-[24px] h-[24px] transform -translate-x-[20px]"
            alt="more-icon"
          />
        </div>
        <div className="flex flex-col px-10">
          <h3 className="font-[400] leading-[19.2px] text-[12px] text-[#83858A]">
            Available Balance
          </h3>
          <h1 className="font-[500] text-[28px] leading-[36.4px]">$183.43</h1>
        </div>
      </div>

      {/* Last Transactions */}
      <div className="self-start px-5 w-[343px] mt-4">
        <h1 className="font-[500] text-[18px] leading-[23.4px] text-white mb-5">
          Last Transaction
        </h1>
        <div className="flex flex-col">
          {lastTransaction.map((trans) => (
            <div key={trans.id} className="flex flex-row justify-between mt-7">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-[44px] h-[44px] bg-[#0D1828] border border-[#162130] rounded-full">
                  <img
                    src={trans.icon}
                    className="w-[20px] h-[20px]"
                    alt="card-icon"
                  />
                </div>
                <div>
                  <h2 className="font-[500] text-[14px] leading-[18px] text-[#FFFFFF]">
                    {trans.TransName}
                  </h2>
                  <h4 className="text-[#83858A] text-[12px] font-[400] leading-[19.2px]">
                    {trans.Date}
                  </h4>
                </div>
              </div>
              <div className="text-[#FFFFFF] font-[400] text-[14px] leading-[22.4px]">
                {trans.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
