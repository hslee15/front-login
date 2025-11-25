import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AddPaymentPage from "./pages/payment/AddPaymentPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/admin" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="/signup" element={<AuthLayout />}>
          <Route index element={<SignupPage />} />
        </Route>
        <Route path="/add-payment" element={<AuthLayout />}>
          <Route index element={<AddPaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
