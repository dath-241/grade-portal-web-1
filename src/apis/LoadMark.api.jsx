import axios from 'axios';
import { LECTURER_LOADMARK_API_URL } from '../constants/api';
import { LECTURER_UPDATEMARK_API_URL } from '../constants/api';

export const loadMarkApi = async (file) => {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.post(LECTURER_LOADMARK_API_URL, file, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {        
        console.error('Error uploading file', error.response ? error.response.data : error);
        throw error;
    }
};

export const updateMarkApi = async (file, id) => {
    const token = localStorage.getItem('token');
    
    try {
        const response = await axios.patch(LECTURER_UPDATEMARK_API_URL(id), file, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error uploading file', error.response ? error.response.data : error);
        throw error;
    }
};
