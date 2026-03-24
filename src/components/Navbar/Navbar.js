/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="/">
        A|W
      </a>
      <span className='update'>Last updated: 03/24/2026 </span>

      {/* Hide hamburger button if on home page */}
      {!onHomePage && (
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      )}

      <div className={`collapse navbar-collapse ${onHomePage ? '' : ''}`} id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          {!onHomePage && (
            <>
              <li className={`nav-item ${props.status}`}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
