//List all api in this project
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
const CLIENT_API_URL = process.env.REACT_APP_CLIENT_API_URL;

export const LOGIN_ADMIN_API = `${ADMIN_API_URL}/login`;
export const LOGIN_USER_API = `${CLIENT_API_URL}/login`;

export const LECTURER_LIST_API_URL = `${ADMIN_API_URL}/account/teacher`;
export const STUDENT_LIST_API_URL = `${ADMIN_API_URL}/account/student`;

export const ACCOUNT_DETAIL_API_URL = (id) => `${ADMIN_API_URL}/account/${id}`;

export const LECTURER_LOADMARK_API_URL = `${CLIENT_API_URL}/resultScore/create`;
export const LECTURER_UPLOAD_API_URL = `${CLIENT_API_URL}/resultScore/upload`;
export const LECTURER_UPDATEMARK_API_URL = (id) => `${CLIENT_API_URL}/resultScore/${id}`;

export const HALLOFFAME_LIST_API_URL = `${ADMIN_API_URL}/HOF/all`;

export const MAPPING_ID_TO_NAME_API_URL = (id) => `${CLIENT_API_URL}/course/${id}`;

export const CREATE_CLASS_API_URL = `${ADMIN_API_URL}/class/create`;
export const CLASS_LIST_BY_COURSE = (id) => `${ADMIN_API_URL}/class/course/${id}`;
export const CREATE_COURSE_ADMIN_API_URL = `${ADMIN_API_URL}/course/create`;
export const COURSE_ADMIN_LIST_API_URL = `${ADMIN_API_URL}/course/all`;

//----Start API for Class List of Student----//
export const CLASS_LIST_API_URL = `${CLIENT_API_URL}/class/account`;
export const CLASS_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/class/${id}`;
export const GRADE_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/resultScore/${id}`;
export const TEACHER_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/${id}`;
export const COURSE_DETAIL_API_URL = (id) => `${CLIENT_API_URL}/course/${id}`;
//----End API for Class List of Student----//

export const CREATE_ACCOUNT_API_URL = `${ADMIN_API_URL}/account/create`;
