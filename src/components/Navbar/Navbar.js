import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arkanwhite from "../../assets/araknwhite.svg"; // Logo Image
import arkanlogo1 from "../../assets/arkanlogo1.webp"; // Logo Image

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle Dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  // Close the dropdown menu
  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  // Handle clicks outside of dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  // UseEffect hook to add and remove event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link to="/">
            <img src={arkanlogo1} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        <div className="navbar-right">
          <ul className="navbar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li
              className="dropdown"
              ref={dropdownRef}
              onClick={(e) => e.stopPropagation()} // Prevent closing dropdown on clicking the dropdown itself
            >
              <span
                onClick={toggleDropdown}
                className={`dropdown-trigger ${
                  isDropdownVisible ? "active" : ""
                }`}
              >
                Services{" "}
                <span className="dropdown-arrow">
                  {isDropdownVisible ? "◀" : "▼"}
                </span>
              </span>

              {isDropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/services" onClick={closeDropdown}>
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/under-construction" onClick={closeDropdown}>
                      Production
                    </Link>
                  </li>
                  <li>
                    <Link to="/under-construction" onClick={closeDropdown}>
                      Business Setup
                    </Link>
                  </li>
                  <li>
                    <Link to="/under-construction" onClick={closeDropdown}>
                      Business Solutions
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/ContactUs" className="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navbar-placeholder"></div>
    </>
  );
}

export default Navbar;
