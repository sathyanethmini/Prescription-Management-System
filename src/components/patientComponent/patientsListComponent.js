import React from "react";
import { useNavigate } from "react-router-dom";

export default function PatientsListComponent() {

  const Navigate = useNavigate();

  const handleClickViewHistory = () => { 
    Navigate("/patients/history");
  };
  const handleClickCreatePatient = () => { 
    Navigate("/patients/create");
  };

  return (
    <div>
      <h1 className="pb-3">Patients</h1>
      <div className="d-flex ">
        <div>
          <button type="button" className="btn btn-primary me-3" onClick={handleClickCreatePatient}>
            Add New Patient
          </button>
        </div>

        <div className="input-group ml-5 ">
          <div
            id="search-autocomplete"
            className="form-outline shadow-2-strong"
          >
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1">
              Search by Code
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="scrollbleTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Sex</th>
              <th scope="col">Last day met</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> 1</th>
              <td>data.code</td>
              <td>data.name</td>
              <td>data.description</td>
              <td>data.price</td>
              <td>Male</td>
              <td>data.quentity</td>
              <td className="d-flex">
                <button type="button" className="btn btn-success tableButton" onClick={handleClickViewHistory}>
                  Add today visit
                </button>
                <button type="button" className="btn btn-primary tableButton" onClick={handleClickViewHistory}>
                  View history
                </button>
                <button type="button" className="btn btn-warning tableButton">
                  Edit profile
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
