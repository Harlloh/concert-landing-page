import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>
            <NavLink to="#">
              <img className="logo" src={logo} alt="" />
            </NavLink>
          </h1>
        </div>
        <div className="both-div-icon">
          <div className="mobile-menu-icons">
            {!mobileMenuOpen ? (
              <FaTimes className="cancel-icon" onClick={toggleMobileMenu} />
            ) : (
              <FaBars className="menu-icon" onClick={toggleMobileMenu} />
            )}
          </div>
          <nav className={`menu ${mobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li onClick={toggleMobileMenu}>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li onClick={toggleMobileMenu}>
                <a href="/#about">About</a>
              </li> */}
              <li onClick={toggleMobileMenu}>
                <a href="/#ministers">Ministers</a>
              </li>
              <li onClick={toggleMobileMenu}>
                <NavLink to="/playlist">Playlist & Prayer</NavLink>
              </li>
              <li onClick={toggleMobileMenu}>
                <NavLink to="give">Do you love me?</NavLink>
              </li>

              <li onClick={toggleMobileMenu}>
                <a href="/#volunteer">Volunteer</a>
              </li>

              <li onClick={toggleMobileMenu}>
                <a href="/#register">Register</a>
              </li>

              {/* <li onClick={toggleMobileMenu}>
                <a href="#gallery">Gallery</a>
              </li> */}
              <li onClick={toggleMobileMenu}>
                <a href="/#footer" className="btn">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
