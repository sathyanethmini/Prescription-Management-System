import React, { useState, useEffect } from "react";
import HandleFirebasesubmit from "../../helpers/HandleFirebasesubmit";
import { getPatientById, updatePatinet } from "../../services/PatientService";
import { useParams } from "react-router-dom";

export default function UpdatePatientComponent() {
  const {id} = useParams();
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address001, setAddress001] = useState("");
  const [address002, setAddress002] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit profile information and profilePic URL to server
    console.log(profilePic);

    let data = {
      patientId:id,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dob: dob,
      nic: nic,
      email: email,
      telephoneNo: phone,
      addressLine01: address001,
      addressLine02: address002,
      city: city,
      profilePicUrl: profilePic,
    };
    updatePatinet(data);
  };

  const handleUpload = (url) => {
    setProfilePic(url);
  };

  useEffect(() => {
    getPatientById(id).then((res) => {
            // Set the initial state with the provided product data
    setProfilePic(res.data.profilePicUrl);
    setFirstName(res.data.firstName)
    setLastName(res.data.lastName)
    setGender(res.data.gender)
    setDob(res.data.dob)
    setNic(res.data.nic)
    setEmail(res.data.nic)
    setPhone(res.data.telephoneNo)
    setAddress001(res.data.addressLine01)
    setAddress002(res.data.addressLine02)
    setCity(res.data.city)
    });
  },[]);

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
          <form className="col-9 border-right" onSubmit={handleSubmit}>
            <div>
              <div className="p-3 py-5">
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">DOB</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="gender"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">NIC</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nic"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">E-Mail</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nic"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address 01</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="address 01"
                      value={address001}
                      onChange={(e) => setAddress001(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address 02</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="address 02"
                      value={address002}
                      onChange={(e) => setAddress002(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
