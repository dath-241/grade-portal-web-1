//List all api in this project
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
// const CLIENT_API_URL = process.env.REACT_APP_CLIENT_API_URL;

export const LECTURER_LIST_API_URL = `${ADMIN_API_URL}/lecturers`;
export const LECTURER_DETAIL_API_URL = (id) => `${ADMIN_API_URL}/lecturers/${id}`;

export const HALLOFFAME_LIST_API_URL = `${ADMIN_API_URL}/HOF/all`;
