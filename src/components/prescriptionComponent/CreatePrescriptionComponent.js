import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPatientById } from "../../services/PatientService";
import { getDoctorById } from "../../services/DoctorService";
import { addPrescription } from "../../services/PrescriptionService";
import { getProducts } from "../../services/StockService";

export default function CreatePrescriptionComponent() {
  const { id } = useParams();
  const doctorId = localStorage.getItem("userId");

  const [patient, setPatient] = useState({});
  const [doctor, setDoctor] = useState({});
  const [allMedicineList, setAllMedicineList] = useState([]);
  const [prescriptionDescription, setPrescriptionDescription] = useState("");
  const [createdOn, setCreatedOn] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [medicineList, setMedicineList] = useState([]);
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [dosageFrequency, setDosageFrequency] = useState("");

  const handleAddMedicine = () => {
    const newMedicine = {
      medicineId :allMedicineList.find(m => m.medicineName === medicine).medicineId,
      medicine: medicine, // Update to use medicineId
      dosage: dosage,
      dosageFrequency: dosageFrequency,
      isComplete: false,
      medicineQty:0,
      updatedBy:"doctor"
    };

    setMedicineList([...medicineList, newMedicine]);
    setMedicine("");
    setDosage("");
    setDosageFrequency("");
  };

  const handleDeleteMedicine = (index) => {
    const updatedList = [...medicineList];
    updatedList.splice(index, 1);
    setMedicineList(updatedList);
  };

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();

    // Create the JSON object to send to the backend
    const prescriptionData = {
      prescriptionDescription: prescriptionDescription,
      doctorId: doctor.doctorId,
      patientId: id,
      createdOn: createdOn,
      isComplete: false,
      isActive: true,
      medicinePrescriptionUpsertDtos: medicineList,
    };

    addPrescription(prescriptionData);
  };

  useEffect(() => {
    console.log(doctorId);
    getPatientById(id).then((res) => {
      setPatient(res.data);
      console.log(res.data);
    });
    getDoctorById(doctorId).then((res) => {
      setDoctor(res.data);
      console.log(res.data);
    });
    getProducts().then((res) => {
      setAllMedicineList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
            <h2 className="">
              Add today's visit to patient: {patient.firstName}{" "}
              {patient.lastName}
            </h2>
            <form
              className="p-4 rounded-2 shadow-2-strong"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  className="form-control mb-3"
                  id="description"
                  placeholder="Enter prescription description"
                  value={prescriptionDescription}
                  onChange={(e) => setPrescriptionDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={createdOn}
                  onChange={(e) => setCreatedOn(e.target.value)}
                  disabled // Disable the input field
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <h3>Medicine List</h3>
            <div className="table-responsive" style={{ maxHeight: "300px" }}>
              <table className="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th>Medicine</th>
                    <th>Dosage</th>
                    <th>Dosage Frequency</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="scrollable-table">
                  {medicineList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.medicine}</td>
                      <td>{item.dosage}</td>
                      <td>{item.dosageFrequency}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteMedicine(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col-md-6">
                <form className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="medicine" className="form-label">
                      Medicine
                    </label>
                    <input
                      className="form-control"
                      id="medicine"
                      list="data"
                      onChange={(e) => setMedicine(e.target.value)}
                      placeholder="Search"
                      value={medicine}
                    />
                    <datalist id="data">
                      {allMedicineList.map((op) => (
                        <option>
                          {op.medicineName}
                        </option>
                      ))}
                    </datalist> 
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="dosage" className="form-label">
                      Dosage
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dosage"
                      value={dosage}
                      onChange={(e) => setDosage(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="dosageFrequency" className="form-label">
                      Frequency
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dosageFrequency"
                      value={dosageFrequency}
                      onChange={(e) => setDosageFrequency(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddMedicine}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
