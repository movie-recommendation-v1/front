import React, { useState } from "react";
import google from "../../../assets/images/googleLogo.svg";
import "./Login.scss"; // Bu faylni yaratishingiz kerak

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login successful!", email, password);
  };

  return (
    <div className="login-container">
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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
