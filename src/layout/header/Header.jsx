import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import arrowBottom from "../../assets/images/arrow-bottom.svg";
import search from "../../assets/images/search.svg";

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Foydalanuvchi holatini saqlash

  const navigate = useNavigate();

  const toggleDropDown = () => setIsDropDown(!isDropDown);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Mahalliy saqlashdan foydalanuvchi holatini tekshirish (agar tizimga kirgan bo'lsa)
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true"); // "true" deb belgilangan bo'lsa, tizimga kirgan holat deb belgilaymiz
  }, []);

  // Sign In tugmasini bosganda login sahifasiga o'tish
  const handleSignInClick = () => {
    navigate("/login");
  };

  // Foydalanuvchi "Profile"ga yo'naltiriladi
  const handleProfileClick = () => {
    navigate("/profile");
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
                  <img src={arrowBottom} alt="" />
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
            
            {isLoggedIn ? ( // Foydalanuvchi tizimga kirgan bo'lsa "Profile" tugmasini ko'rsatish
              <button className="profile-button" onClick={handleProfileClick}>
                Profile
              </button>
            ) : ( // Aks holda "Sign In" tugmasi
              <button className="signin-button" onClick={handleSignInClick}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
