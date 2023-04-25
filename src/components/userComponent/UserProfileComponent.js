import React,{useEffect, useState} from "react";

export default function UserProfileComponent() {

  return (
    <div>
      <div className="container rounded">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center ">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">Type : Admin</span>
              <span> </span>
            </div>
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
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="surname"
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
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    value=""
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
