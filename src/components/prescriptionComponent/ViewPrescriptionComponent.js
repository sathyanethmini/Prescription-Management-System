import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPrescriptionById,
  updatePrescription,
} from "../../services/PrescriptionService";
import { getPatientById } from "../../services/PatientService";

export default function ViewPrescriptionComponent() {
  const { id } = useParams();
  const [prescription, setPrescription] = useState("");
  const [prescriptionToUpdate, setPrescriptionToUpdate] = useState("");
  const [patient, setpatient] = useState({});

  const handleSubmit = (e) => {
    console.log(prescription.medicinePrescriptionUpsertDtos[0].updatedBy);
    e.preventDefault();
    prescription.medicinePrescriptionUpsertDtos[0].isComplete = true;
    updatePrescription(prescriptionToUpdate);
  };

  const handleCheckboxChange = (index) => {
    const updatedPrescription = { ...prescriptionToUpdate };
    updatedPrescription.medicinePrescriptionUpsertDtos[index].isComplete =
      !updatedPrescription.medicinePrescriptionUpsertDtos[index].isComplete;
    setPrescriptionToUpdate(updatedPrescription);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prescriptionResponse = await getPrescriptionById(id);
        const prescriptionData = prescriptionResponse.data;
        setPrescription(prescriptionData);
        setPrescriptionToUpdate(prescriptionData);
        prescription.medicinePrescriptionUpsertDtos[0].isComplete = true;
        console.log(
          prescriptionData.medicinePrescriptionUpsertDtos[0].isComplete
        );

        const patientResponse = await getPatientById(
          prescriptionData.patientId
        );
        const patientData = patientResponse.data;
        setpatient(patientData);
        console.log(patientData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6">
          <div
            className="container"
            style={{ maxHeight: "75vh", overflowY: "auto" }}
          >
            <div className="card">
              <div className="card-header">
                <h4>Prescription ID: {prescription.prescriptionId}</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title">Patient Information:</h5>
                <p className="card-text">
                  Patient Name: {patient.firstName} {patient.lastName}
                </p>
                <p className="card-text">Date of Birth: {patient.dob}</p>
                <p className="card-text">Gender: {patient.gender}</p>
                <h5 className="card-title">Doctor Information:</h5>
                <p className="card-text">
                  Doctor Name: {prescription.doctorFirstName}{" "}
                  {prescription.doctorLastName}
                </p>
                <p className="card-text">
                  Specialization: {prescription.specialization}
                </p>
                <p className="card-text">
                  Hospital: {prescription.hospitalName}
                </p>
                <h5 className="card-title">Description:</h5>
                <p className="card-text">
                  {prescription.prescriptionDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h4>Medicines</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title">Prescriptions:</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Medicine Id</th>
                      <th scope="col">Dosage</th>
                      <th scope="col">Frequency</th>
                      <th scope="col">Complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescription.medicinePrescriptionUpsertDtos &&
                      prescription.medicinePrescriptionUpsertDtos.map(
                        (medicinePrescription, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              {
                                medicinePrescription.medicineUpsertDto
                                  .medicineName
                              }
                            </td>
                            <td>{medicinePrescription.dosage}</td>
                            <td>{medicinePrescription.dosageFrequency}</td>
                            <td>
                              {" "}
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={`checkbox-${index}`}
                                checked={medicinePrescription.isComplete}
                                onChange={() => handleCheckboxChange(index)}
                              />
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
