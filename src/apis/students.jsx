import axios from "axios";
import { STUDENT_LIST_API_URL, ACCOUNT_DETAIL_API_URL } from "../constants/api";

export const fetchAllStudentApi = async () => {
  const token = localStorage.getItem('token');
  try {
      const response = await axios.get(STUDENT_LIST_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Return data: ', response);
      return response.data;
  } catch (error) {
      console.error('Error fetching Student List:', error);
  }
}; 

export const fetchStudentByIdApi = async (id) => {
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
      console.error('Error fetching Student Info', error);
  }
};