import { copyIcon, coupanMedal } from "../../assets/Images";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CouponsCard = ({ coupon }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.promoCode).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };
  return (
    <div className="flex items-center justify-between w-full max-w-[385px] h-[66px]">
      <div className="flex items-center justify-between bg-[#0ECCB3] text-black w-full h-full rounded-[45px] shadow-md px-4 ">
        <div className="absolute flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full">
            <img
              src={coupanMedal}
              alt="Coupon Icon"
              className="w-[35px] h-[35px] object-contain"
            />
          </div>
          <div>
            <p className="font-[700] text-[20px] leading-[20px]">Coupons</p>
            <p className="font-[400] text-[12px] leading-[16px] mt-1">
              Apply <span>{coupon.promoCode}</span> For discount
            </p>
          </div>
        </div>
        <div
          className="absolute transform -translate-y-[60%] right-9"
          onClick={handleCopy}
        >
          <img
            src={copyIcon}
            alt="Copy Icon"
            className="w-[14px] h-[14px] object-contain"
          />
        </div>
      </div>
      {copied && (
        <div className="absolute bottom-[10px] right-[10px] bg-[#090D14] text-white text-xs px-3 py-1 rounded-full -translate-x-[50px] -translate-y-[30px]">
          Copied
        </div>
      )}
    </div>
  );
};

export default CouponsCard;
