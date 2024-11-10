//List all api in this project
const API_URL = "http://localhost:4000";
export const LECTURER_LIST_API_URL = `${API_URL}/lecturers`;
export const LECTURER_DETAIL_API_URL = (id) => `${API_URL}/lecturers/${id}`;
