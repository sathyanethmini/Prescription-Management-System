import axios from 'axios';

const API_URL = 'https://mocki.io/v1/76afc3f7-7051-4b31-a55b-429cb9795c66';

export const getProducts = async () => {
    return await axios({
        method: 'get',
        url: API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};