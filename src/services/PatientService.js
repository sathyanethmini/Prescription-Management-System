import axios from 'axios';
import {BaseUrl} from '../config/ConnectionStrings'

const API_URL ='https://localhost:44304/api/Patient/';

export const getPatients = async () => {
    return await axios({
        method: 'post',
        url: API_URL + "GetAllPatients",
        headers: {
            'Content-Type': 'application/json'
        }
    });
}; 

export const getPatientById = async (id) => {
  return await axios({
    method: 'post',
    url: API_URL + 'GetPatientDetailsById?patientId='+ id,
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

export const addPatient = async (data) => {
    return await axios({
        method: 'post',
        url: API_URL+"CreatePatient",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }).then(function (response) {
        if (response.status === 200) {
          alert(
            "ptient added successfully"
          );
          window.location.href = "/patients";
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
}; 

export const updatePatinet = async (data) => {
  return await axios({
      method: 'post',
      url: API_URL+"UpdatePatient",
      headers: {
          'Content-Type': 'application/json'
      },
      data: data
  }).then(function (response) {
      if (response.status === 200) {
        alert(
          "Patient updated successfully"
        );
        window.location.href = "/patients";
      }
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
}; 

export const deletePatient = async (id) => {
    return await axios({
      method: 'delete',
      url: API_URL + 'DeletePatient?patientId='+ id,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if (response.status === 200) {
        alert('Patient deleted successfully');
        window.location.reload();
        // Perform any additional actions upon successful deletion
      }
    }).catch(function (error) {
      // Handle error
      console.log(error);
    });
  };