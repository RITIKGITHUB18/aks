import { copyIcon, coupanMedal } from "../../assets/Images";
import copy from "copy-to-clipboard";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CouponsCard = ({ coupon }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.promoCode).then(() => {
      const toastId = coupon.promoCode;
      toast.info(`🦄${toastId} copied`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: toastId,
      });
    });
  };
  return (
    <div className="relative flex items-center justify-between w-full max-w-[330px] h-[66px]">
      <div className="absolute flex items-center justify-between bg-[#0ECCB3] text-black w-full h-full rounded-[24px] shadow-md px-4 ">
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
          className="absolute transform -translate-y-[8px] translate-x-[260px]"
          onClick={handleCopy}
        >
          <img
            src={copyIcon}
            alt="Copy Icon"
            className="w-[14px] h-[14px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CouponsCard;
