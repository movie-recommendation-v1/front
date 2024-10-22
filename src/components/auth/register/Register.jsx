import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../../assets/images/googleLogo.svg";
import "./Register.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [timer, setTimer] = useState(60); // 60 second timer
  const navigate = useNavigate();

  // Registration function - sends data through API
  const register = async (name, email, password) => {
    try {
      const response = await fetch("https://next.mambetov.uz/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.info(
          "Registration successful! Please verify with the code sent to your email.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
        setIsModalOpen(true); // Open modal for verification
        setTimer(60); // Reset timer when modal opens to 60 seconds
      } else if (response.status === 409) {
        toast.info(
          "This email is already registered. Please verify with a code.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
        setIsModalOpen(true);
        setTimer(60); // Reset timer when modal opens to 60 seconds
      } else {
        toast.error(data.message || "Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Verify code function using the new API
  const verifyCode = async () => {
    try {
      const response = await fetch(
        "https://next.mambetov.uz/user/verify-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            sms_code: verificationCode,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Code verified! Redirecting to home...", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        toast.error(data.message || "Invalid code, please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Error verifying the code. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    let countdown;
    if (isModalOpen && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(countdown);
      toast.error("Time expired! Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      setIsModalOpen(false); // Close modal when timer reaches zero
      toast.dismiss(); // Dismiss any active toasts
    }

    return () => clearInterval(countdown); // Clear the interval when modal closes
  }, [isModalOpen, timer]);

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
      <div className="register-right"></div>

      <ToastContainer />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter the 6-digit verification code</h3>
            <input
              type="text"
              maxLength="6"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter your code"
            />
            <div className="timer">Time left: {timer} seconds</div>
            <button onClick={verifyCode} className="verify-btn">
              Verify
            </button>
            <button onClick={() => setIsModalOpen(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
