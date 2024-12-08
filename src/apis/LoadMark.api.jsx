import axios from 'axios';
import { LECTURER_LOADMARK_API_URL } from '../constants/api';

export const loadMarkApi = async (file) => {    
    const token = localStorage.getItem('token');
    const formData = new FormData();


    try {  
        const response = await axios.post(LECTURER_LOADMARK_API_URL, file, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Upload file successfully', response.data);

        return response.data;
    } catch (error) {
        console.error('Error uploading file', error.response ? error.response.data : error);
        throw error;
    }
};
