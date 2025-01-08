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
      className="flex justify-center items-center text-center w-[393px]  bg-no-repeat bg-center bg-cover"
    >
      <div
        className="flex flex-col mt-[600px] w-[393px] h-[250px] text-white"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col w-[353px] h-[250px] p-4">
          <h2 className="font-[700] text-[24px] text-start">
            Experience the Best
          </h2>
          <h2 className="font-[700] text-[24px] text-start pt-1">
            Night Life With AKS
          </h2>
          <p className="font-[400] text-start text-[13.5px] pt-2">
            Come join us at the exciting surfing events at Dubai.
          </p>
          <p className="font-[400] text-start text-[13.5px] pt-1">
            Register yourself now!
          </p>
        </div>
        <div className="flex items-center justify-center pb-4">
          <button
            onClick={handleGetStarted}
            className="bg-white rounded-[24px] w-[361px] h-[50px] text-[#0F172A] font-500 text-[16px] items-center justify-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
