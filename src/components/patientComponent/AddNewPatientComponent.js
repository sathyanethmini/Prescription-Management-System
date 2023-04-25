import React, { useState } from "react";
import HandleFirebasesubmit from "../../helpers/HandleFirebasesubmit";

export default function AddNewPatientComponent() {
  const [shortCode , setShortCode] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSaveProfile = () => {
    // Submit profile information and profilePic URL to server
    console.log(profilePic);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    generateShortCode();
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
    generateShortCode();
  }

  const generateShortCode = () => {
    var code = name.split(" ").map((word) => word.charAt(0)).join("");
    debugger
    code = code + age;
    setShortCode(code);
  }

  const handleUpload = (url) => {
    setProfilePic(url);
  };


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center ">
              <img
                className="rounded-circle mt-5"
                width={150}
                height={150}
                src={
                  profilePic ||
                  "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                }
              />
              <span> </span>
            </div>
            <label htmlFor="profile-pic">Profile Picture:</label>
            <HandleFirebasesubmit onUpload={handleUpload} />
          </div>
          <div className="col-9 border-right">
            <div className="p-3 py-5">
              <div className="d-flex align-items-center mb-3 d-flex">
                <h4 className="text-right">Patient : {shortCode}</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    value={age}
                    placeholder="age"
                    onChange={handleAgeChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <div className="mt-4">
                    <button
                      className="btn btn-primary profile-button"
                      onClick={handleSaveProfile}
                      type="button"
                    >
                      Save Patient
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
