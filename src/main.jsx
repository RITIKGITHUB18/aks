import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ToastContainerLocal from "./components/common/ToastContainerLocal.jsx";
import { AuthProvider } from "./helper/AuthContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <CartProvider> */}
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainerLocal />
        </BrowserRouter>
      </Provider>
      {/* </CartProvider> */}
    </AuthProvider>
  </StrictMode>
);
