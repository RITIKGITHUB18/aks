import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

import ShareYourMusic from "./pages/ShareYourMusic";
import HistoryPage from "./pages/History";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthCallback from "./helper/AuthCallback";
import { PaymentPage } from "./pages/PaymentPage";
import HotelRecommendationPage from "./pages/HotelRecommendationPage";
import WalletPage from "./pages/WalletPage";
import ChatPage from "./pages/ChatPage";
import Receipt from "./pages/Receipt";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/getStarted" element={<GetStartedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/auth/v1/callback" element={<AuthCallback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/select-dob" element={<SelectDob />} />
          <Route path="/verify-phone" element={<VerifyPhonePage />} />
          <Route path="/select-country" element={<SelectCountry />} />
          <Route path="/phone-auth" element={<PhoneAuth />} />
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/book-table/:id" element={<BookTable />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/order-completion" element={<OrderCompleted />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/payment-method" element={<PaymentPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/recommendation" element={<HotelRecommendationPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/share-your-music" element={<ShareYourMusic />} />
          <Route path="/chat-with-us" element={<ChatPage />} />
          <Route path="/view-receipt" element={<Receipt />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
