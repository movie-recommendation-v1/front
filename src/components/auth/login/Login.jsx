import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // ToastContainer va toast
import "react-toastify/dist/ReactToastify.css"; // CSS import qilish
import google from "../../../assets/images/googleLogo.svg";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await fetch("https://next.mambetov.uz/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        toast.success("Login successful!");
        navigate("/");
      } else {
        console.error("Login error:", data);
        toast.error("Login failed! " + (data.message || "Please try again."));
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      toast.error("An error occurred! " + error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="opacity">
        <div className="container">
          <div className="login-all">
            <h2>Betayincha Logo</h2>
            <h3>Access the Cinematic Realm with Elegance</h3>
            <p>
              A Refined Entrance: Secure Your Journey into a World of Timeless
              Film Excellence
            </p>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@betayin.com"
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Input password"
              />
              <button type="submit" className="signin-btn">
                Sign In
              </button>
              <div className="google-signin">
                <button className="google-btn">
                  <img src={google} alt="Google Logo" />
                  Sign In with Google
                </button>
              </div>
            </form>
            <p className="register-link">
              Don’t have an account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
