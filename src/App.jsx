import { Route, Routes } from "react-router-dom";
import "./App.css";
import GetStartedPage from "./pages/GetStartedPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import VerifyPhonePage from "./pages/VerifyPhonePage";
import PhoneAuth from "./pages/Phone";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStartedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/verify-phone" element={<VerifyPhonePage />} />
      <Route path="/phone" element={<PhoneAuth />} />
    </Routes>
  );
}

export default App;
