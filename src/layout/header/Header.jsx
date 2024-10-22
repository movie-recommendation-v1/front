import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import arrowBottom from "../../assets/images/arrow-bottom.svg";
import search from "../../assets/images/search.svg";
import defaultAvatar from "../../assets/images/user.png";
import Profile from "../../components/profile/Profile";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);

  const navigate = useNavigate();

  const toggleDropDown = () => setIsDropDown(!isDropDown);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  const checkLoginStatus = () => {
    // Ensure setIsLoggedIn is a function
    if (typeof setIsLoggedIn !== "function") {
      console.error("setIsLoggedIn is not a function");
      return; // Early return to avoid further errors
    }
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      setUserAvatar(savedAvatar);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    checkLoginStatus(); // Component yuklanganda holatni tekshirish

    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Update: Navigate to the profile page
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  // Profile section render qilish
  const renderAuthSection = () => {
    if (isLoggedIn) {
      return (
        <div className="profile-section">
          <img
            src={userAvatar}
            alt="Profile"
            className="profile-avatar"
            onClick={handleProfileClick}
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {isProfileModalOpen && (
            <div className="modal-overlay">
              <Profile onClose={closeProfileModal} />
            </div>
          )}
        </div>
      );
    }

    // Update: Change the button to show "Profile" instead of "Sign In"
    return (
      <button className="profile-button" onClick={handleProfileClick}>
        Profile
      </button>
    );
  };

  return (
    <header className={`Header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-all">
          <div className="header-left">
            <h1>Betayincha Logo</h1>
          </div>
          <div className="header-middle">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/live">LIVE</NavLink>
            <NavLink to="/tv-show">TV SHOW</NavLink>
            <NavLink to="/movies">MOVIES</NavLink>
            <div className="more-dropdown">
              <button onClick={toggleDropDown}>
                MORE
                <span className={`arrow ${isDropDown ? "up" : "down"}`}>
                  <img src={arrowBottom} alt="arrow icon" />
                </span>
              </button>
              <div className={`dropdown ${isDropDown ? "visible" : ""}`}>
                <Link to="/more/action">Action</Link>
                <Link to="/more/comedy">Comedy</Link>
                <Link to="/more/drama">Drama</Link>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="search-container">
              <button onClick={toggleSearch} className="search-icon">
                <img src={search} alt="Search" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className={`search-input ${isSearchVisible ? "visible" : ""}`}
              />
            </div>
            <button className="subscribe-button">Subscribe</button>
            {renderAuthSection()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
