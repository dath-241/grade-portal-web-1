import axios from 'axios';
import {LECTURER_LOADMARK_API_URL} from '../constants/api';


export const fetchLoadMarkApi = async (data) => {
    const token = localStorage.getItem('token'); 

    try {
        const response = await axios.post(LECTURER_LOADMARK_API_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        console.error('Lỗi khi tải lên bảng điểm:', error);
        throw error;
    }
};