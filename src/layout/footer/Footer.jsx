import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-section">
          <h2>MOSTREAM</h2>
          <p>
            Where every frame tells a story, and every click opens the door to a
            world of limitless entertainment. Immerse yourself in a universe of
            unparalleled movies.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <strong>Home</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv-shows"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/redeem"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Redeem
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <strong>About</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/investors"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Investors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <strong>FAQ</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help-center"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/media-center"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Media Center
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cookie-preferences"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Cookie Preferences
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Stay up to date</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
