//List all lecturer's apis
import axios from 'axios'
import { LECTURER_LIST_API_URL } from "../constants/api";

export const fetchAllLecturerApi = async () => {
  const response = await axios.get(LECTURER_LIST_API_URL);
  console.log("Return data: ", response);
  return response.data;
};