import { useNavigate } from "react-router-dom";
import { crackersCelebration } from "../assets/Images";

const GetStartedPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${crackersCelebration})`,
      }}
      className="flex flex-col justify-end w-[450px] h-screen bg-no-repeat bg-cover"
    >
      {/* Overlay section */}
      <div
        className="fixed w-[450px] bottom-0 flex flex-col text-white transform p-4 -translate-y-0"
        style={{
          height: "33vh",
          background:
            "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col w-[353px] max-w-[400px] text-start px-4 mt-3">
          <h2 className="font-[700] text-[24px] leading-8">
            Experience the Best
          </h2>
          <h2 className="font-[700] text-[24px] pt-1 leading-8">
            Night Life With AKS
          </h2>
          <p className="font-[400] text-[14px] text-gray-300 pt-2">
            Come join us at the exciting surfing events at Dubai.
          </p>
          <p className="font-[400] text-[14px] text-gray-300 pt-1">
            Register yourself now!
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-8 pb-4">
          <button
            onClick={handleGetStarted}
            className="bg-white rounded-[24px] w-[90%] max-w-[350px] h-[50px] text-[#0F172A] font-[500] text-[16px] flex items-center justify-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
