import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatients,deletePatient } from "../../services/PatientService";

export default function PatientsListComponent() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchNic, setSearchNic] = useState("");

  const Navigate = useNavigate();

  const handleClickViewHistory = () => {
    Navigate("/patients/history");
  };
  const handleClickCreatePatient = () => {
    Navigate("/patients/create");
  };

  const handleUpdatePatient = (id) => {
    Navigate(`/patient/update/${id}`)
  }

  useEffect(() => {
    getPatients().then((res) => {
      setPatients(res.data);
      setFilteredPatients(res.data);
      console.log(res.data);
    });
  }, []);

  const handlePatientSearch= () => {
    if(searchNic != ""){
      setFilteredPatients(patients.filter(patient => patient.nic == searchNic ))
    }
    else{
      setFilteredPatients(patients)
    }
  }

  return (
    <div>
      <h1 className="pb-3">Patients</h1>
      <div className="d-flex ">
        <div>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={handleClickCreatePatient}
          >
            Add New Patient
          </button>
        </div>

        <div className="input-group ml-5 ">
          <div
            id="search-autocomplete"
            className="form-outline shadow-2-strong"
          >
            <input type="search" id="form1" className="form-control" onChange={(e)=>setSearchNic(e.target.value)} />
            <label className="form-label" htmlFor="form1">
              Search by NIC 
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>handlePatientSearch()}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="scrollbleTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">NIC</th>
              <th scope="col">Phone No</th>
              <th scope="col">Area</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(function (data, index) {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td><img style={{width:40}} src={data.profilePicUrl} className="rounded-circle" alt="photo"/></td>
                  <td>
                    {data.firstName} {data.lastName}
                  </td>
                  <td>{data.gender}</td>
                  <td>{data.dob}</td>
                  <td>{data.nic}</td>
                  <td>{data.telephoneNo}</td>
                  <td>{data.city}</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-success tableButton"
                      onClick={handleClickViewHistory}
                    >
                      Add today visit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary tableButton"
                      onClick={handleClickViewHistory}
                    >
                      View history
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning tableButton"
                      onClick={()=>handleUpdatePatient(data.patientId)}
                    >
                      Edit profile
                    </button>
                    <button type="button" className="btn btn-danger" onClick={()=>deletePatient(data.patientId)}>
                      Delete
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
