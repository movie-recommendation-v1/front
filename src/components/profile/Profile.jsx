import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.scss";

const Profile = ({ setIsLoggedIn }) => {
  const [avatar, setAvatar] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "image/svg+xml"];
      if (allowedTypes.includes(file.type)) {
        setAvatar(URL.createObjectURL(file));
      } else {
        toast.error(
          "Invalid file type! Please upload a PNG, JPG, or SVG image."
        );
        // Clear the input field
        e.target.value = null;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call, replace with real API later
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully!");
    }, 2000);
  };

  const handleLogout = () => {
    // Logic for logging out the user
    setIsLoggedIn(false); // Update the logged-in state
    toast.success("Logged out successfully!");
    // Redirect or perform any other logout actions here
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Your Profile Welcome ;)</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="avatar-section">
            <label htmlFor="avatar" className="avatar-label">
              <div className="avatar-preview">
                {avatar ? (
                  <img src={avatar} alt="Avatar" />
                ) : (
                  <div className="avatar-placeholder">Choose Avatar</div>
                )}
              </div>
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg, image/svg+xml"
              className="avatar-input"
              onChange={handleAvatarChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your new password"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
