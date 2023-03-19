import React, { useState } from "react";
import RightImage from "../../assets/Images/login_page_left_image.png";
import SuccessAlert from "../../layouts/alerts/SuccessAlert";
import { submitRegisterData } from "../../services/AuthService";

export default function RegisterComponent() {
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [AdminCreateSecret, setAdminCreateSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();

    if (type !== "ADM" && type !== "FAMC" && type !== "DOC") {
      setErrorMessage("Please Select the type");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    switch (type) {
      case "ADM":
        var data = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          AdminCreateSecret: AdminCreateSecret
        };
        break;
      case "FAMC":
        var data = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          dob: dob
        };
        break;
      case "DOC":
        var data = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          dob: dob
        };
        break;
    }

    submitRegisterData(data, type);
  };

  return (
    <div className="h-100 p-5">
      <SuccessAlert isShow={isRegistrationSuccess}/>
      <div className="row">
        <div className="col-md-6 ">
          <img src={RightImage} alt="right_image" className="img-fluid" />
        </div>
        <div className="col-md-6 p-3">
          <div className="card shadow-lg border-0 p-2">
            <div className="card-body">
              <h1 className="card-title">Register</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="type">User Type</label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  >
                    <option value="">Select the Type</option>
                    <option value="ADM">Admin</option>
                    <option value="FAMC">Farmasiet</option>
                    <option value="DOC">Doctor</option>
                  </select>

                  {type !== "" ? (
                    <>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control mb-3"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="firstName"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                      />
                      <label htmlFor="lastName">First Name</label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="lastName"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                      />
                      <label htmlFor="dob">Date Of Birth</label>
                      <input
                        type="Date"
                        className="form-control mb-3"
                        id="dob"
                        placeholder="Enter Date of Birth"
                        value={dob}
                        onChange={(event) => setDob(event.target.value)}
                        required
                      />
                      <div className="invalid-tooltip">
                        Please fill this field
                      </div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control mb-3"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control mb-3"
                        id="confirm-password"
                        placeholder="Re-Enter password"
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                      />
                      {type === "ADM" ? (
                        <>
                          <label htmlFor="adminCreateSecret">
                            Admin Create Secret
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            id="admin-create-secret"
                            placeholder="Enter Admin Create Secret"
                            value={AdminCreateSecret}
                            onChange={(event) =>
                              setAdminCreateSecret(event.target.value)
                            }
                          />
                        </>
                      ) : null}

                      <div className="d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary mt-3">
                          Register
                        </button>
                        <a href="/login" className="mt-3 ms-auto">
                          Login
                        </a>
                      </div>
                    </>
                  ) : null}
                </div>
                {errorMessage && (
                  <p className="text-center text-danger">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
