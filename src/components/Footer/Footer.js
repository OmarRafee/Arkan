import React from "react";
import "./Footer.css";
import arkansmall from "../../assets/arkansmall.svg";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBox, // P.O. Box Icon
  FaInstagram,
  FaFacebookF,
  FaSnapchatGhost,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo-and-description">
            <img src={arkansmall} alt="Arkan Logo" className="footer-logo" />
            <p>
              <span className="custom-font">Arkan Al-Tafawuq</span>, excels in Booth Production, Exhibition Solutions, and Printing Services.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            {/* <li>
              <Link to="/services" className="none nonemargin">
                Construction{" "}
              </Link>
            </li> */}
            <li>
              <Link to="/production" className="none nonemargin">
                Production{" "}
              </Link>
            </li>
            <li>
              <Link to="/DigitalMarketing" className="none nonemargin">
                DigitalMarketing{" "}
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link to="/under-construction" className="none nonemargin">
                Business Setup{" "}
              </Link>
            </li>
            <li>
              <Link to="/under-construction" className="none nonemargin">
                Business Solutions{" "}
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h4>
            <Link to="/ContactUs" className="none">
              Contact Us
            </Link>
          </h4>
          <ul>
            <li>
              <FaPhoneAlt className="icon" />
              +966 54 946 2381 <br />
              +966 54 947 2381
            </li>
            <li>
              <FaEnvelope className="icon" />
              info@arkanaltafawuq.com
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              KSA - Riyadh Al Aylaiah <br />
              District, Building 7573
            </li>
            <li>
              <FaBox className="icon" />
              P.O. Box: 2160-12222
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          {/* <h7>Constsruction</h7>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/arkanaltafawuq?igsh=bXpsaXkwMXNzbWk5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/share/1ArwyCq1q3/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://snapchat.com/t/RGhsnPXo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchatGhost className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/105997914/admin/settings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://www.tiktok.com/@arkan.al.tafawuq?_t=ZS-8xzUdDNcuaS&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="icon" />
            </a>
            <a
              href="https://www.youtube.com/@ArkanAlTafawuq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
          </div> */}
          {/* <h7>Production</h7> */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/arkanaltafawuqproductionhouse?igsh=N253dXZ5bTBvYThr&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.facebook.com/share/19Fn42FAqV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://snapchat.com/t/RGhsnPXo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchatGhost className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/105997914/admin/settings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://www.tiktok.com/@arkan.al.tafawuq?_t=ZS-8stfanyTcwh&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="icon" />
            </a>
            {/* <a
              href="https://www.youtube.com/@ArkanAlTafawuq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 <span className="custom-font">Arkan Al-Tafawuq</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
