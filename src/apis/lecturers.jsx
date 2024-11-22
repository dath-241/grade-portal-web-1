//List all lecturer's apis
import axios from 'axios';
import {
    ACCOUNT_DETAIL_API_URL,
    LECTURER_LIST_API_URL,
} from '../constants/api';

export const fetchAllLecturerApi = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(LECTURER_LIST_API_URL, {
            header: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Return data: ', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching Lecturer List', error);
    }
};

export const fetchLectureByIDApi = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(ACCOUNT_DETAIL_API_URL(id), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Return data: ', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching Lecturer Info', error);
    }
};

