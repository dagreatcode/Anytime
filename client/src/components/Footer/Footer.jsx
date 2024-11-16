import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="mynav">
        <nav className="navbar mynav">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Footer Brand */}
            <span className="navbar-brand mb-0 text-color h1">
              {"© 2023 Anytime.com "}
              <a
                className="daGreat-link"
                href="http://www.dagreatcode.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DaGreatCode - Website Development"
              >
                Powered By
              </a>
            </span>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a
                href="https://facebook.com"
                className="social-icon"
                aria-label="Visit our Facebook page"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="social-icon"
                aria-label="Visit our Twitter page"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="social-icon"
                aria-label="Visit our Instagram page"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
