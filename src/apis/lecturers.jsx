//List all lecturer's apis
import axios from 'axios';
import {
    ACCOUNT_DETAIL_API_URL,
    LECTURER_LIST_API_URL,
} from '../constants/api';

export const fetchAllLecturerApi = async () => {
    try {
        const response = await axios.get(LECTURER_LIST_API_URL);
        console.log('Return data: ', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching Lecturer List', error);
    }
};

export const fetchLectureByIDApi = async (id) => {
    try {
        const response = await axios.get(ACCOUNT_DETAIL_API_URL(id));
        console.log('Return data: ', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching Lecturer Info', error);
    }
};

