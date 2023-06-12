import axios from 'axios';
import {BaseUrl} from '../config/ConnectionStrings'

const API_URL ='https://localhost:44304/api/Doctor/';

export const getDoctorById = async (id) => {
  return await axios({
    method: 'post',
    url: API_URL + 'GetDoctorDetails?userId='+ id,
    headers: {
      'Content-Type': 'application/json'
    }
  })
};