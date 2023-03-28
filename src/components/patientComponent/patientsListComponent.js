import React from "react";

export default function PatientsListComponent() {
  return (
    <div>
      <h1 className="pb-3">Stock</h1>
      <div className="d-flex p-3">
        <div className="me-5">
          <button type="button" className="btn btn-primary">
            Add New Patient
          </button>
        </div>
        <div className="input-group ml-5 ">
          <div id="search-autocomplete" className="form-outline shadow-2-strong">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">
              Search
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="justify-content-center align-content-center">
        <div className="scrollbleTable ">
          <table className="table table-hover">
            <thead>
              <tr className="justify-content-around">
                <th scope="col">#</th>
                <th scope="col">NIC</th>
                <th scope="col">Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">index</th>
                <td>NIC</td>
                <td>Name</td>
                <td>DOB</td>
                <td>Age</td>
                <td className="d-flex">
                  <button type="button" className="btn btn-success tableButton">
                    Add Today Data
                  </button>
                  <button type="button" className="btn btn-primary tableButton">
                    View History
                  </button>
                  <button type="button" className="btn btn-warning tableButton">
                    Edit Profile
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">index</th>
                <td>NIC</td>
                <td>Name</td>
                <td>DOB</td>
                <td>Age</td>
                <td className="d-flex">
                  <button type="button" className="btn btn-success tableButton">
                    Add Today Data
                  </button>
                  <button type="button" className="btn btn-primary tableButton">
                    View History
                  </button>
                  <button type="button" className="btn btn-warning tableButton">
                    Edit Profile
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
    </div>
  );
}
