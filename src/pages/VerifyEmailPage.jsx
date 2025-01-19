import { useLocation } from "react-router-dom";
import VerifyPage from "../components/LoginComponent/VerifyPage";

const VerifyEmailPage = () => {
  const location = useLocation();
  const userEmail = location.state?.email ?? "";
  return (
    <VerifyPage
      header="Please check your email"
      description="We’ve sent a code to"
      emailOrPhone={userEmail}
      onResend={() => alert("A new OTP has been sent to your email.")}
      onSuccess={() => console.log("Email verified!")}
      redirectPath="/phone-auth"
      backPath="/login"
      type="email"
    />
  );
};

export default VerifyEmailPage;
