import { useNavigate } from "react-router-dom";
import { welcomeScreenImg } from "../assets/Images";
import { useAuth } from "../helper/AuthContext";

const WelcomeScreen = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${welcomeScreenImg})`,
      }}
      className="flex flex-col relative justify-center items-center text-center w-[450px] h-[1000px] bg-no-repeat bg-center bg-cover"
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        className="absolute flex flex-col justify-center items-center text-center w-[450px] h-[1000px]"
      >
        <div className="mt-[500px]">
          <div className="">
            <h1 className="font-[700] text-white text-[32px] leading-8">
              Welcome
            </h1>
            <p className="text-[#A5A5A5] font-[600] text-[16px] mt-2 w-[200px]">
              Emmerse yourself into the world of AKS
            </p>
          </div>
          <div
            className="flex items-center justify-center rounded-[24px] mt-10 w-[206px] h-[48px] cursor-pointer bg-gradient-to-r from-[#842ED8] via-[#DB28A9] to-[#9D1DCA]"
            onClick={handleOnClick}
          >
            <p className="font-[600] text-[16px] leading-4 text-white">
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
