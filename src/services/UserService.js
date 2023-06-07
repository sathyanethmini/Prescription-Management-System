import axios from 'axios';
import {BaseUrl} from '../config/ConnectionStrings'

const API_URL ='https://localhost:44304/api/User/';

export const getUsers = async () => {
    return await axios({
        method: 'post',
        url: API_URL + "GetAllUsers",
        headers: {
            'Content-Type': 'application/json'
        }
    });
}; 

export const userActivation = async (userId,status) => {

    return await axios({
        method: "post",
        url:API_URL + "userActivation?activation=" + status + "&userId="+userId,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getUserProfile = async () =>{
    console.log(localStorage.getItem("userId"))
    return await axios({
        method:"post",
        url:API_URL + "GetUserDetailsById?userId=" + localStorage.getItem("userId"),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}