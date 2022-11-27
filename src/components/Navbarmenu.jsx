import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";

import logo from "../Assets/logo.png";
import "../styles/navBar.css";

export const Navbarmenu = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <div className={" Header"}>
        <header
          className={isSmallScreen ? `Header` : `nav-items componentLayout`}
        >
          <NavLink to="/" onClick={toggleNav}>
            <span>
              <img className="Logo" src={logo} alt="logo" />
              <span className="systaSol">Systa Solutions</span>
            </span>
          </NavLink>
          <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
          >
            <nav className="Nav">
              <NavLink to="/" onClick={toggleNav}>
                Home
              </NavLink>
              <NavLink to="/about-us" onClick={toggleNav}>
                About Us
              </NavLink>
              <NavLink to="/Services" onClick={toggleNav}>
                Services
              </NavLink>
              <NavLink to="/Careers" onClick={toggleNav}>
                Careers
              </NavLink>
              <NavLink to="/Contact-Us" onClick={toggleNav}>
                Contact us
              </NavLink>
            </nav>
          </CSSTransition>

          <button onClick={toggleNav} className="Burger">
            <FaBars />
          </button>
        </header>
      </div>
    </>
  );
};
