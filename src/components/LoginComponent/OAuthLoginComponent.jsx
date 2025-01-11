import { supabase } from "../../helper/supabaseConfig";

const OAuthLoginComponent = ({ items, style }) => {
  const handleOAuthLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo:
            "https://gpcwuuypobruknutpqkj.supabase.co/auth/v1/callback",
        },
      });

      if (error) {
        console.error("OAuth login error:", error.message);
        alert(`Error logging in with ${provider}`);
      }
    } catch (error) {
      console.error("Unexpected OAuth login error:", error);
      alert("An unexpected error occurred during OAuth login.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => handleOAuthLogin(item.provider)}
          className={`flex flex-col justify-center w-[360px] h-[52.46px] bg-[#1E293B] rounded-[24px] ${style} mb-3`}
        >
          <div className="flex items-center">
            <div className="flex pl-8">
              <img
                src={item.logo}
                alt={`${item.provide} icon`}
                className="w-[25px] h-[25px]"
              />
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
