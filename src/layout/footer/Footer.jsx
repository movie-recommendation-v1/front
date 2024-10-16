import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer1">
          <h2>Betayincha Logo</h2>
          <p>
            where every frame tells a story, and every click opens the door to a
            world of limitless entertainment. Immerse yourself in a universe of
            unparalleled movie.
          </p>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Redeem</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
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
