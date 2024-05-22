import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            home
          </Link>{" "}
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            program
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={0} duration={-150}>
            about us
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={0} duration={-260}>
            campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={0} duration={-260}>
            testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={-260}
            className="btn"
          >
            contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
