import React from "react";
import logo from "../images/logo.png";
import { pageLinks } from "../data/data";
import { socialLinks } from "../data/data";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img
              src={logo}
              style={{
                width: "19%",
                position:"absolute",
                left: "1rem",
                top: "8px",
              }}
              className="nav-logo"
              alt="backroads"
            />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.icon}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={link.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;