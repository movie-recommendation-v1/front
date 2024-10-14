import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./Header.scss";
import arrowBottom from "../../assets/images/arrow-bottom.svg";
import search from "../../assets/images/search.svg";

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleDropDown = (e) => {
    e.preventDefault();
    setIsDropDown(!isDropDown);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <Router>
      <div className="Header">
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
              <button className="signin-button">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Header;
