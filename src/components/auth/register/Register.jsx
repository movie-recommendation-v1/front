import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yo'naltirish uchun hook
import google from "../../../assets/images/googleLogo.svg";
import "./Register.scss"; // Bu faylni yaratishingiz kerak

const Register = () => {
  const [name, setName] = useState(""); // Ism uchun useState
  const [email, setEmail] = useState(""); // Email uchun useState
  const [password, setPassword] = useState(""); // Parol uchun useState
  const navigate = useNavigate(); // Sahifaga yo'naltirish uchun hook

  // Ro'yxatdan o'tish funksiyasi - API orqali ma'lumot yuboradi
  const register = async (name, email, password) => {
    const response = await fetch("https://next.mambetov.uz/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Registration successful:", data);
      navigate("/login");
    } else {
      console.error("Registration error:", data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
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
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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
            Already have an account? <a href="/login">Sign In</a>
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
