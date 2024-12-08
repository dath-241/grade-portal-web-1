import axios from 'axios';
import { COURSE_ADMIN_LIST_API_URL, CLASS_LIST_BY_COURSE} from '../constants/api';

export const fetchAllCoursesApi = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(COURSE_ADMIN_LIST_API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.allCourse; 
    } catch (error) {
        console.error('Error fetching Course List:', error);
        throw error; 
    }
};

export const fetchClassByIDApi = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(CLASS_LIST_BY_COURSE(id), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.classes;
    } catch (error) {
        console.error('Error fetching Class Info:', error);
        throw error; 
    }
};