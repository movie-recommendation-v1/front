import React, { useState } from "react";
import registerBg from "../../../assets/images/registerBg.png";
import google from "../../../assets/images/googleLogo.svg";

import "./Register.scss"; // Bu faylni yaratishingiz kerak

const Register = () => {
  const [name, setName] = useState(""); // Ism uchun useState
  const [email, setEmail] = useState(""); // Email uchun useState
  const [password, setPassword] = useState(""); // Parol uchun useState

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration successful!", { name, email, password });
  };

  return (
    <div className="all-register">
      <div className="register-container">
        <div className="register-left">
          <h2>Betayincha Logo</h2>
          <h3>Join the Cinematic Society Experience</h3>
          <p>
            Unlock the Gates to a World of Infinite Movie Magic with Seamless
            Registration - Your Passport to Personalized Film Adventures Awaits!
          </p>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Input username"
            />
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
              Getting Started
            </button>
            <div className="google-signin">
              <button className="google-btn">
                <img src={google} alt="Google Logo" />
                Sign In with Google
              </button>
            </div>
          </form>
          <p className="register-link">
            Don’t have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
      <div className="register-right">
        {/* <img src={registerBg} alt="" /> */}
      </div>
    </div>
  );
};

export default Register;
