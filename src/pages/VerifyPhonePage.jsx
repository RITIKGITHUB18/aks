import { useLocation, useNavigate } from "react-router-dom";
import VerifyPage from "../components/LoginComponent/VerifyPage";

const VerifyPhonePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber =
    location.state?.phoneNumber || "Phone number not provided";

  return (
    <VerifyPage
      header="Please verify your phone"
      description="We’ve sent a code to"
      emailOrPhone={phoneNumber}
      onResend={() => alert("A new OTP has been sent to your phone.")}
      onSuccess={() => navigate("/dashboard")}
      redirectPath="/select-dob"
      backPath="/phone-auth"
      type="phone"
    />
  );
};

export default VerifyPhonePage;
