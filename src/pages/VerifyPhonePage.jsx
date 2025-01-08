import VerifyPage from "../components/LoginComponent/verifyPage";

const VerifyPhonePage = () => {
  return (
    <VerifyPage
      header="Please verify your phone"
      description="We’ve sent a code to"
      emailOrPhone="+91-9876543210"
      onResend={() => alert("A new OTP has been sent to your phone.")}
      onSuccess={() => console.log("Phone verified!")}
      redirectPath="/dashboard"
    />
  );
};

export default VerifyPhonePage;
