import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import GetStartedPage from "./pages/GetStartedPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import VerifyPhonePage from "./pages/VerifyPhonePage";
import PhoneAuth from "./pages/PhoneAuthPage";
import SelectCountry from "./pages/SelectCountryPage";
import SelectDob from "./pages/SelectDobPage";
import WelcomeScreen from "./pages/WelcomeScreenPage";
import HomePage from "./pages/HomePage";
import BookTable from "./pages/BookTable";
import MapPage from "./pages/MapPage";
import ShoppingCart from "./pages/ShoppingCart";
import OrderCompleted from "./pages/OrderCompleted";
import ProfilePage from "./pages/ProfilePage";
import HistoryPage from "./pages/History";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthCallback from "./helper/AuthCallback";
import { PaymentPage } from "./pages/PaymentPage";
import HotelRecommendationPage from "./pages/HotelRecommendationPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/getStarted" element={<GetStartedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/verify-phone" element={<VerifyPhonePage />} />
      <Route path="/phone-auth" element={<PhoneAuth />} />
      <Route path="/select-country" element={<SelectCountry />} />
      <Route path="/select-dob" element={<SelectDob />} />
      <Route path="/auth/v1/callback" element={<AuthCallback />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book-table/:id" element={<BookTable />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/order-completion" element={<OrderCompleted />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/payment-method" element={<PaymentPage />} />
        <Route path="/recommendation" element={<HotelRecommendationPage />} />
      </Route>
      <Route path="/map" element={<MapPage />} />
      <Route path="/chat-with-us" element={<ChatPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
