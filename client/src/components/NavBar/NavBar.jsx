import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg mynav">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="./favicon.ico" alt="Logo" width="30" height="24" />
          <span className="ms-2 text-uppercase font-weight-bold">
            Your Brand
          </span>
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
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Service"
                className="nav-link"
                activeClassName="active"
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className="nav-link"
                activeClassName="active"
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
