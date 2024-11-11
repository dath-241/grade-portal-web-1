//List all lecturer's apis
import axios from 'axios';
import {
    LECTURER_DETAIL_API_URL,
    LECTURER_LIST_API_URL,
    CLASS_LIST_API_URL,
    CLASS_DETAIL_API_URL,
    GRADE_DETAIL_API_URL,
    TEACHER_DETAIL_API_URL,
    COURSE_DETAIL_API_URL,
} from '../constants/api';

export const fetchAllLecturerApi = async () => {
    const response = await axios.get(LECTURER_LIST_API_URL);
    console.log('Return data: ', response);
    return response.data;
};

export const fetchLectureByIDApi = async (id) => {
    const response = await axios.get(LECTURER_DETAIL_API_URL(id));
    console.log('Return data: ', response);
    return response.data;
};

//--Get All Class--//
export const fetchAllClassApi = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(CLASS_LIST_API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('Return data: ', response);
    return response.data;
};
//--Get Class Info--//
export const fetchClassByIdApi = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(CLASS_DETAIL_API_URL(id), {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('Return data: ', response);
    return response.data;
};
//--Get Grade Info--//
export const fetchGradeByIdApi = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(GRADE_DETAIL_API_URL(id), {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('Return data: ', response);
    return response.data;
};
//--Get Teacher Info--//
export const fetchTeacherInfoApi = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(TEACHER_DETAIL_API_URL(id), {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('Return data: ', response);
    return response.data;
};
//--Get Course Info--//
export const fetchCourseInfoApi = async (id) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(COURSE_DETAIL_API_URL(id), {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
  console.log('Return data: ', response);
  return response.data;
};