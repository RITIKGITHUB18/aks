import { useNavigate } from "react-router-dom";
import { aksLogo, aksNight, crackersCelebration } from "../assets/Images";

const GetStartedPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${aksNight})`,
        }}
        className="absolute top-0 left-0 w-full h-full sm:bg-cover"
      >
        <div className="flex items-center justify-center transition-transform translate-y-[250%] duration-200 animate-fade-in">
          <img src={aksLogo} className="w-[250px] h-[128px]" />
        </div>
      </div>

      <div className="relative bottom-0 flex flex-col justify-between min-h-screen">
        <div className="flex-grow"></div>{" "}
        <div
          className="flex flex-col justify-center items-center text-white px-4 pb-2"
          style={{
            height: "230px",
            bottom: "0",
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col justify-center text-start sm:px-4 mt-4 w-full">
            <h2 className="font-bold text-[24px] sm:text-[24px] leading-8 ">
              Experience the Best
            </h2>
            <h2 className="font-bold text-[20px] sm:text-[24px] pt-1 leading-8">
              Night Life With AKS
            </h2>
            <p className="font-[400] text-[14px] sm:text-[14px] text-[#E2E8F0] pt-2 leading-[5px] mt-2">
              Come join us at the exciting surfing events at Dubai.
            </p>
            <p className="font-[400] text-[14px] sm:text-[14px] text-[#E2E8F0] pt-2">
              Register yourself now!
            </p>
          </div>
          <div className="flex items-center w-full justify-center mt-6 sm:mt-8 pb-4">
            <button
              onClick={handleGetStarted}
              className="bg-white rounded-[24px] w-[90%] sm:w-[80%] max-w-[400px] h-[50px] text-[#0F172A] font-medium text-[14px] sm:text-[16px] flex items-center justify-center"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
