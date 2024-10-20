import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import ErrorBoundary from "./ErrorBoundary";
import Categories from "./components/categories/Categories";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate ni chaqirish

  const hideHeaderAndFooter =
    location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home"); // Sayt yuklanganda home sahifasiga yo'naltirish
    }
  }, [location.pathname, navigate]);

  return (
    <ErrorBoundary>
      <div className="App">
        {!hideHeaderAndFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        {!hideHeaderAndFooter && <Footer />}
      </div>
    </ErrorBoundary>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
