// routes.js
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../components/Login/Login';
import Unauthorize from '../components/Login/unauthorize';
import Home from '../pages/Home/Home';
import HOF from '../pages/HOF/HOF';
import Management from '../pages/Admin/Management';
import AddTeacher from '../pages/Admin/AddTeacher';
import AddStudent from '../pages/Admin/AddStudent';
import LecturerList from '../pages/ManageLecturer/LecturerList';
import LecturerInfor from '../pages/ManageLecturer/LecturerInfor';
import StudentList from '../pages/ManageStudent/StudentList';
import StudentInfor from '../pages/ManageStudent/StudentInfor';
import StudentCoursePage from '../pages/StudentPages/CoursePage';
import StudentCourseInfo from '../pages/StudentPages/CourseInfo';
import StudentGradeInfo from '../pages/StudentPages/GradeInfo';
import LecturerCoursePage from '../pages/LecturerPages/CoursePage';
import LecturerCourseInfo from '../pages/LecturerPages/CourseInfo';
import LecturerGradeInfo from '../pages/LecturerPages/GradeInfo';
import FacultyList from '../pages/ManageCourses/FacultyList';
import SubjectList from '../pages/ManageCourses/SubjectList ';
import ClassList from '../pages/ManageCourses/ClassList ';
import AddCourse from '../pages/ManageCourses/AddCourse';

const routes = [
    {
        path: '/',
        component: LandingPage,
        protected: false,
    },
    {
        path: '/login',
        component: Login,
        protected: false,
    },
    {
        path: '/unauthorized',
        component: Unauthorize,
        protected: false,
    },
    {
        path: '/home',
        component: Home,
        layout: true,
        allowedRoles: ['teacher', 'admin', 'student'],
        protected: true,
    },
    {
        path: '/hall-of-fame',
        component: HOF,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management',
        component: Management,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/add-teacher',
        component: AddTeacher,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/add-student',
        component: AddStudent,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/lecturer-list',
        component: LecturerList,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/lecturer-infor/:id',
        component: LecturerInfor,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/student-list',
        component: StudentList,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/student-infor/:id',
        component: StudentInfor,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/faculty-list',
        component: FacultyList,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/subject-list',
        component: SubjectList,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/management/class-list',
        component: ClassList,
        layout: true,
        allowedRoles: ['admin'],
        protected: true,
    },
    {
        path: '/student-courses',
        component: StudentCoursePage,
        layout: true,
        allowedRoles: ['student'],
        protected: true,
    },
    {
        path: '/student-course/:id/info',
        component: StudentCourseInfo,
        layout: true,
        allowedRoles: ['student', 'admin'],
        protected: true,
    },
    {
        path: '/student-course/:id/grade',
        component: StudentGradeInfo,
        layout: true,
        allowedRoles: ['student', 'admin'],
        protected: true,
    },
    {
        path: '/lecturer-courses',
        component: LecturerCoursePage,
        layout: true,
        allowedRoles: ['teacher', 'admin'],
        protected: true,
    },
    {
        path: '/lecturer-course/:id/info',
        component: LecturerCourseInfo,
        layout: true,
        allowedRoles: ['teacher', 'admin'],
        protected: true,
    },
    {
        path: '/lecturer-course/:id/grade',
        component: LecturerGradeInfo,
        layout: true,
        allowedRoles: ['teacher', 'admin'],
        protected: true,
    },
    {
        path: '/managerment/add-course',
        component: AddCourse,
        layout: true,
    },
];

export default routes;
