//List all lecturer's apis
import axios from 'axios'
import { LECTURER_DETAIL_API_URL, LECTURER_LIST_API_URL } from "../constants/api";

export const fetchAllLecturerApi = async () => {
  const response = await axios.get(LECTURER_LIST_API_URL);
  console.log("Return data: ", response);
  return response.data;
};

export const fetchLectureByIDApi = async (id) => {
  const response = await axios.get(LECTURER_DETAIL_API_URL(id));
  console.log("Return data: ", response);
  return response.data;
}