import axios from "axios";
import { BaseUrl } from "../config/ConnectionStrings";

const API_URL = "https://localhost:44304/api/prescription/";

export const addPrescription = async (data) => {
  return await axios({
    method: "post",
    url: API_URL + "CreatePrescription",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      if (response.status === 200) {
        alert("prescription created successfully");
        window.location.href = "/patients";
      }
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};

export const updatePrescription = async (data) => {
  return await axios({
    method: "post",
    url: API_URL + "UpdatePrescription",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then(function (response) {
      if (response.status === 200) {
        alert("prescription updated successfully");
        // window.location.href = "/patients";
      }
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};
 

export const getPatientHistoryByPatientId = async (id) => {
  return await axios({
    method: 'post',
    url: API_URL + 'GetPatientHistoryByPatientId?patientId='+ id,
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

export const getAllPrescriptions = async () => {
  return await axios({
    method: 'post',
    url: API_URL + 'GetPrescriptions',
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

export const getPrescriptionById = async (id) => {
  return await axios({
    method: 'post',
    url: API_URL + 'GetPrescriptionById?prescriptionId='+ id,
    headers: {
      'Content-Type': 'application/json'
    }
  })
};