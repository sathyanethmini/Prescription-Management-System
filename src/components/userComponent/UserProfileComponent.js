import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/UserService";
import HandleFirebasesubmit from "../../helpers/HandleFirebasesubmit";
import { render } from "@testing-library/react";

export default function UserProfileComponent() {
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [userType, setuserType] = useState("");
  const [createdOn, setCreatedOn] = useState("");

  useEffect(() => {
    getUserProfile().then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setDob(res.data.dob);
      setuserType(res.data.userType);
      setCreatedOn(res.data.createdOn);
      setUserName(res.data.userName);
      setProfilePic(res.data.profilePicUrl)
    });
  }, []);

  const handleUpload = (url) => {
    setProfilePic(url);
  };

  return (
    <div>
      <div className="container rounded">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center ">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={profilePic || "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}
              />
              <span className="font-weight-bold">
                {firstName} {lastName}
              </span>
              <span className="text-black-50">Type : {userType}</span>
              <span> </span>
            </div>
            <label htmlFor="profile-pic">Profile Picture:</label>
            <HandleFirebasesubmit onUpload={handleUpload} />
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
          <div className="col-9 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={firstName}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    placeholder="surname"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userName}
                    placeholder="surname"
                    disabled
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Account Created On</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={createdOn}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
