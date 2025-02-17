import { supabase } from "../../helper/supabaseConfig";

const OAuthLoginComponent = ({ items, style }) => {
  const handleOAuthLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo:
            // "https://gpcwuuypobruknutpqkj.supabase.co/auth/v1/callback", //mine
            "https://yoiqmblqgsllnocysrqh.supabase.co/auth/v1/callback", // hushh
        },
      });

      if (error) {
        console.error("OAuth login error:", error.message);
        alert(`Error logging in with ${provider}`);
        return;
      }
    } catch (error) {
      console.error("Unexpected OAuth login error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {items.map((item, index) => (
        <button
          key={index}
          disabled={item?.disabled}
          onClick={() => handleOAuthLogin(item.provider)}
          className={`flex flex-col justify-center w-[360px] h-[52.46px] bg-[#1E293B] rounded-[24px] cursor-pointer ${style} mb-3`}
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
            <div className="relative">
              {item.disabled && (
                <span className="absolute text-[7px] text-white bg-green-800 px-2 py-1 rounded-[12px] -translate-x-[70px] -translate-y-[15px] w-[4rem]">
                  coming soon
                </span>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default OAuthLoginComponent;
