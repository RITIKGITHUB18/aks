import { supabase } from "../../helper/supabaseConfig";

const OAuthLoginComponent = ({ items, style }) => {
  const handleOAuthLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo:
            "https://yoiqmblqgsllnocysrqh.supabase.co/auth/v1/callback",
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
      {items.map((item, index) => {
        const disabledClasses = item.disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer";

        return (
          <button
            key={index}
            disabled={item.disabled}
            onClick={() => handleOAuthLogin(item.provider)}
            className={`flex flex-col justify-center w-[360px] h-[52.46px] bg-[#1E293B] rounded-[24px] mb-3 ${style} ${disabledClasses}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex pl-8">
                <img
                  src={item.logo}
                  alt={`${item.provider} icon`}
                  className="w-[25px] h-[25px]"
                />
              </div>
              <div className="flex mx-auto pr-5">
                <p className="text-[#FFFFFF] font-[500] text-[16.79px] leading-6 space-x-5">
                  {item.text}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default OAuthLoginComponent;
