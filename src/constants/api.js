//List all api in this project
const ADMIN_API_URL = "https://canxphung.id.vn/admin/api";
// const CLIENT_API_URL = "https://canxphung.id.vn/api";


export const LECTURER_LIST_API_URL = `${ADMIN_API_URL}/lecturers`;
export const LECTURER_DETAIL_API_URL = (id) => `${ADMIN_API_URL}/lecturers/${id}`;
