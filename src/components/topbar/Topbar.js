import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SalamSakhteman
          </Link>
          <button
            className="navbar-toggler toggler-example"
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/users">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
