import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../../assets/images/googleLogo.svg";
import "./Register.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Ro'yxatdan o'tish funksiyasi - API orqali ma'lumot yuboradi
  const register = async (name, email, password) => {
    try {
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
        toast.success("Registration successful! Redirecting to login...", {
          position: "top-right", // Toast joylashuvi
          autoClose: 3000, // 3 soniyadan keyin to'xtash
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Login sahifasiga 2 soniyada yo'naltirish
      } else {
        toast.error(data.message || "Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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

      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
};

export default Register;
