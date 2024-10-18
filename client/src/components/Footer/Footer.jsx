import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="mynav">
        <nav className="navbar mynav">
          <div className="container d-flex justify-content-between align-items-center">
            <span className="navbar-brand mb-0 text-color h1">
              {" © 2023 Anytime.com "}
              <a
                className="daGreat-link"
                href="http://www.dagreatcode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered By
              </a>
            </span>
            <div className="social-links">
              <a href="/" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
