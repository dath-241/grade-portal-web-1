import axios from 'axios';
import { LECTURER_LOADMARK_API_URL } from '../constants/api';

export const loadMarkApi = async (file) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Không tìm thấy token, vui lòng đăng nhập lại.');
    }

    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(LECTURER_LOADMARK_API_URL, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Lỗi khi tải lên bảng điểm:', error.response ? error.response.data : error);
        throw error;
    }
};
