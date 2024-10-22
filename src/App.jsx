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
import Profile from "./components/profile/Profile"; // Import Profile component

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define the routes where Header and Footer should not be displayed
  const hideHeaderAndFooterRoutes = ["/login", "/register", "/profile"];

  // Check if the current route is in the list to hide Header and Footer
  const hideHeaderAndFooter = hideHeaderAndFooterRoutes.includes(
    location.pathname
  );

  useEffect(() => {
    // Redirect to /home when the root route ("/") is accessed
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <ErrorBoundary>
      <div className="App">
        {/* Show Header unless on login, register, or profile page */}
        {!hideHeaderAndFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}
        </Routes>
        {/* Show Footer unless on login, register, or profile page */}
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
