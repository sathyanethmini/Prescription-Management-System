import React, {useState} from "react";
import RightImage from "../../assets/Images/login_page_left_image.png";

import {submitLoginData} from  "../../services/AuthService"
export default function LoginComponent() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
        var data = {
            email: username,
            password: password
        };
    submitLoginData(data);
  }

  return (
    <div className="h-100 p-5">
      <div className="row">
        <div className="col-md-6 ">
          <img src={RightImage} alt="right_image" className="img-fluid" />
        </div>
        <div className="col-md-6 p-5">
          <div className="card shadow-lg border-0 p-3">
            <div className="card-body">
              <h1 className="card-title">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    placeholder="Enter password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary mt-3">
                      Login
                    </button>
                    <a href="/register" className="mt-3 ms-auto">
                      Register
                    </a>
                  </div>
                  <label htmlFor="validationCustomUsername" className="form-label">
                    Username
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
