import axios from 'axios';
import {BaseUrl} from '../config/ConnectionStrings'

const API_URL ='https://localhost:44304/api/Medicine/GetAllMedicine';

export const getProducts = async () => {
    return await axios({
        method: 'post',
        url: API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}; 