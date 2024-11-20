//List all api in this project
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
const CLIENT_API_URL = process.env.REACT_APP_CLIENT_API_URL;


export const LECTURER_LIST_API_URL = `${ADMIN_API_URL}/lecturers`;
export const LECTURER_DETAIL_API_URL = (id) => `${ADMIN_API_URL}/lecturers/${id}`;

export const CREATE_CLASS_API_URL = `${ADMIN_API_URL}/class/create`;

//----Start API for Class List of Student----//
export const CLASS_LIST_API_URL = `${CLIENT_API_URL}/class/account`
export const CLASS_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/class/${id}`
export const GRADE_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/resultScore/${id}`
export const TEACHER_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/${id}`
export const COURSE_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/course/${id}`
//----End API for Class List of Student----//

