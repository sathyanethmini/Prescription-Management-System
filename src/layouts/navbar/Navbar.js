import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/Images/logo.png";
import { logout } from "../../services/AuthService";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top navbarCustom">
        <div className="container">
          <a className="navbar-brand d-flex" role="button" href="/">
            <img src={logo} alt="..." height="56" />
          </a>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  role="button"
                  href="/patients"
                >
                  patients
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  role="button"
                  href="/prescriptions"
                >
                  Prescriptions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" href="/stock">
                  Stock
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <FontAwesomeIcon icon={faUserCircle} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
}
