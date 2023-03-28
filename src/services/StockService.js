import axios from 'axios';

const API_URL = 'https://localhost:44382/api/Medicine/GetAllMedicine';

export const getProducts = async () => {
    return await axios({
        method: 'post',
        url: API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};