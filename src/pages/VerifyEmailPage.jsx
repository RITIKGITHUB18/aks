import VerifyPage from "../components/LoginComponent/VerifyPage";

const VerifyEmailPage = () => {
  return (
    <VerifyPage
      header="Please check your email"
      description="We’ve sent a code to"
      emailOrPhone="ritikrog90@gmail.com"
      onResend={() => alert("A new OTP has been sent to your email.")}
      onSuccess={() => console.log("Email verified!")}
      redirectPath="/phone"
    />
  );
};

export default VerifyEmailPage;
