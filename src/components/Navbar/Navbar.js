import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arkanlogo1 from "../../assets/arkanlogo1.webp"; // Logo Image

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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

        <div className="burger-icon" onClick={toggleMobileMenu}>
          ☰
        </div>

        <div className="navbar-right">
          <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
                    <Link
                      to="/production"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Production
                    </Link>
                  </li>
            {/* <li
              className="dropdown"
              ref={dropdownRef}
              onClick={(e) => e.stopPropagation()}
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
                    <Link
                      to="/services"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/production"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Production
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/under-construction"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Business Setup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/under-construction"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Business Solutions
                    </Link>
                  </li>
                </ul>
              )}
            </li> */}
            <li>
              <Link
                to="/ContactUs"
                className="contact"
                onClick={() => setMobileMenuOpen(false)}
              >
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
