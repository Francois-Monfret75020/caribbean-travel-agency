import React from "react";
import { pageLinks, socialLinks } from "../data/data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link , index) => {
            return (
              <li key={index}>
                <a href="#home" className="footer-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="footer-icons">
          {socialLinks.map((social, index) => {
            return (
              <li key={index}>
                <a href={social.href} target="_blank" className="footer-icon">
                  <i className={social.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
