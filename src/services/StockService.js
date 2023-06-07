import axios from 'axios';
import {BaseUrl} from '../config/ConnectionStrings'

const API_URL ='https://localhost:44304/api/Medicine/';

export const getProducts = async () => {
    return await axios({
        method: 'post',
        url: API_URL + "GetAllMedicine",
        headers: {
            'Content-Type': 'application/json'
        }
    });
}; 

export const getProductById = async (id) => {
    return await axios({
      method: 'get',
      url: API_URL + 'GetMedicineById?medicineId='+ id,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

export const addProduct = async (data) => {
    return await axios({
        method: 'post',
        url: API_URL+"AddNewMedicine",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }).then(function (response) {
        if (response.status === 200) {
          alert(
            "Medicine added successfully"
          );
          window.location.href = "/stock";
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
}; 
export const updateProduct = async (data) => {
    return await axios({
        method: 'post',
        url: API_URL+"UpdateMedicine",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }).then(function (response) {
        if (response.status === 200) {
          alert(
            "Medicine updated successfully"
          );
          window.location.href = "/stock";
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
}; 

export const deleteProduct = async (id) => {
    debugger
    return await axios({
      method: 'delete',
      url: API_URL + 'DeleteMedicine?medicineId='+ id,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if (response.status === 200) {
        alert('Medicine deleted successfully');
        window.location.reload();
        // Perform any additional actions upon successful deletion
      }
    }).catch(function (error) {
      // Handle error
      console.log(error);
    });
  };