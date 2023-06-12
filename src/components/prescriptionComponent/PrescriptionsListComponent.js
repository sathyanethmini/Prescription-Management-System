import React, { useEffect, useState } from "react";
import { getAllPrescriptions } from "../../services/PrescriptionService";
import { useNavigate } from "react-router-dom";

export default function PrescriptionsListComponent() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [filteredPrescriptions, setFilteredPrescriptions] = useState([]);
  const [searchPrescriptionId, setsearchPrescriptionId] = useState("");

  const Navigate = useNavigate();

  const handleClickViewPrescription= (id) => {
    Navigate(`/prescription/CheckoutPrescription/${id}`);
  };

  const handlePrescriptionSearch= () => {
    if(searchPrescriptionId != ""){
      setFilteredPrescriptions(prescriptions.filter(prescription => prescription.prescriptionId == searchPrescriptionId ))
    }
    else{
      setFilteredPrescriptions(prescriptions)
    }
  }

  useEffect(() => {
    getAllPrescriptions().then((res) => {
      setPrescriptions(res.data);
      setFilteredPrescriptions(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1 className="pb-3">Prescriptions</h1>
      <div className="d-flex ">
        <div className="input-group ml-5 ">
          <div
            id="search-autocomplete"
            className="form-outline shadow-2-strong"
          >
            <input type="search" id="form1" className="form-control" onChange={(e)=>setsearchPrescriptionId(e.target.value)} />
            <label className="form-label" htmlFor="form1">
              Search by Code
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>handlePrescriptionSearch()}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="scrollbleTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Prescription Id</th>
              <th scope="col">Patient Id</th>
              <th scope="col">Created Date</th>
              <th scope="col">Issued Doctor Id</th>
              <th scope="col">Issued Doctor Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrescriptions.map(function (data, index) {
              return (
                <tr key={index}>
                  <th scope="row"> {index+1}</th>
                  <td>{data.prescriptionId}</td>
                  <td>{data.patientName}</td>
                  <td>{data.createdOn}</td>
                  <td>{data.doctorId}</td>
                  <td>{data.doctorFirstName} {data.doctorLastName }</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-primary tableButton"
                      onClick={()=>handleClickViewPrescription(data.prescriptionId)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
