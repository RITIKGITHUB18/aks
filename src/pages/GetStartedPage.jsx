import { useNavigate } from "react-router-dom";
import { crackersCelebration } from "../assets/Images";

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
          backgroundImage: `url(${crackersCelebration})`,
        }}
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
      ></div>
      <div className="relative flex flex-col justify-between min-h-screen">
        <div className="flex-grow"></div>{" "}
        <div
          className="flex flex-col justify-center items-center text-white px-6 "
          style={{
            height: "35vh",
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col justify-center text-start px-4 mt-3 w-full">
            <h2 className="font-bold text-[20px] sm:text-[24px] leading-8">
              Experience the Best
            </h2>
            <h2 className="font-bold text-[20px] sm:text-[24px] pt-1 leading-8">
              Night Life With AKS
            </h2>
            <p className="font-medium text-[12px] sm:text-[14px] text-gray-300 pt-2">
              Come join us at the exciting surfing events at Dubai.
            </p>
            <p className="font-medium text-[12px] sm:text-[14px] text-gray-300 pt-1">
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
