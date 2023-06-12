import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../../services/AuthService";
import logo from "../../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuth();
  const Navigate = useNavigate();
  const userType = localStorage.getItem("userType");

  const goToProfile = () => {
    Navigate("/user/profile");
  };

  const isAdmin = userType === "Admin";
  const isDoctor = userType === "Doctor";
  const isPharmacist = userType === "Pharmacist";

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top navbarCustom">
        <div className="container">
          <a className="navbar-brand d-flex" role="button" href="/">
            <img src={logo} alt="..." height="65" />
          </a>
          <p className="p-3">Hello {userType}</p>
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
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/stock">
                      Medicine
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      Users
                    </Link>
                  </li>
                </>
              )}
              {isDoctor && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/patients">
                      Patients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/stock">
                      Medicine
                    </Link>
                  </li>
                </>
              )}
              {isPharmacist && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/prescriptions">
                      Prescriptions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/stock">
                      Medicine
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="nav-item">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <FontAwesomeIcon icon={faUserCircle} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={goToProfile}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
}
