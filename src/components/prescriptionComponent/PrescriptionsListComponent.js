import React from "react";

export default function PrescriptionsListComponent() {
  return (
    <div>
      <h1 className="pb-3">Prescriptions</h1>
      <div className="d-flex ">
        <div className="input-group ml-5 ">
          <div
            id="search-autocomplete"
            className="form-outline shadow-2-strong"
          >
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">
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
              <th scope="col">Patient Name</th>
              <th scope="col">Created Date</th>
              <th scope="col">Issued Doctor Id</th>
              <th scope="col">Issued Doctor Name</th>
              <th scope="col">Is Medicine Issued</th>
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
                <button type="button" className="btn btn-primary tableButton">
                  View
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
