import React, { useEffect, useState } from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { getPatientById } from "../../services/PatientService";
import { getPatientHistoryByPatientId } from "../../services/PrescriptionService";

export default function PatientHistoryComponent() {
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const [PatientHistory, setPatientHistory] = useState([]);

  useEffect(() => {
    getPatientById(id).then((res) => {
      setPatient(res.data);
      console.log(res.data);
    });
    getPatientHistoryByPatientId(id).then((res) => {
      setPatientHistory(res.data);
      console.log("patient histor :" + res.data);
    });
  }, []);

  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card rounded-15">
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src={patient.profilePicUrl}
                      alt="Generic placeholder image"
                      className="img-fluid rounded-10"
                      style={{ width: "180px" }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">
                      Name : {patient.firstName} {patient.lastName}
                    </h5>
                    <p className="mb-2 pb-1 text-muted">DOB : {patient.dob}</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-light">
                      <div>
                        <p className="small text-muted mb-1">Address</p>
                        <p className="mb-0">{patient.addressLine01}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MDBAccordion initialActive={1}>
          {PatientHistory.map((item,index) => {
            return (
              <MDBAccordionItem
                collapseId={index+1}
                headerTitle =  {"Created on :" + item.createdOn + "  Doctor : " + item.doctorFirstName + " " + item.doctorLastName } 
                key={index}
              >
                <div className="d-flex">
                  <div className="card rounded-15 p-3 col-6">
                    <p>
                      <b>Description :</b> 
                      {item.prescriptionDescription}
                    </p>
                  </div>
                  <div className="card rounded-15 p-3 col-6">

                      <b>Medicines :</b> <br />
                      <ul>
                      {item.medicinePrescriptionUpsertDtos.map((subItem,subIndex)=>{
                        return(
                          <li key={subIndex}>medicine Id : {subItem.medicineId} | <b>Dosage :</b> {subItem.dosage}</li>
                        )
                      })}
                      </ul>
          
                  </div>
                </div>
              </MDBAccordionItem>
            );
          })}
        </MDBAccordion>
      </div>
    </div>
  );
}
