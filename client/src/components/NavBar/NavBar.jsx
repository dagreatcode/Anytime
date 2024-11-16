import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg mynav shadow">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="./favicon.ico" alt="Logo" width="30" height="24" />
          <span className="ms-2 text-uppercase font-weight-bold">Anytime</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                style={{ color: "#77b260" }}
                aria-label="About us page"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Service"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                style={{ color: "#77b260" }}
                aria-label="Our services page"
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                style={{ color: "#77b260" }}
                aria-label="Contact page"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
