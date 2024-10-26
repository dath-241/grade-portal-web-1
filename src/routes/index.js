import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../components/Login/Login';
import Home from '../pages/Home/Home';
import HOF from '../pages/HOF/HOF';
import Management from '../pages/Admin/Management';
import AddTeacher from '../pages/Admin/AddTeacher';
import AddStudent from '../pages/Admin/AddStudent';
import TeacherInfor from '../pages/ManageLecturer/LecturerInfor';
import StudentInfor from '../pages/ManageStudent/StudentInfor';
import CoursePage from '../pages/StudentPages/CoursePage';
import CourseInfo from '../pages/StudentPages/CourseInfo';
import GradeInfo from '../pages/StudentPages/GradeInfo';
import Course1 from '../pages/AdminPages/Course1';
import Course2 from '../pages/AdminPages/Course2';
import Course3 from '../pages/AdminPages/Course3';

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/home',
        component: Home,
        layout: true,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/hall-of-fame',
        component: HOF,
        layout: true,
    },
    {
        path: '/management',
        component: Management,
        layout: true,
    },
    {
        path: '/management/lecturer-infor',
        component: TeacherInfor,
        layout: true,
    },
    {
        path: '/management/student-infor',
        component: StudentInfor,
        layout: true,
    },
    {
        path: '/add-teacher',
        component: AddTeacher,
        layout: true,
    },
    {
        path: '/add-student',
        component: AddStudent,
        layout: true,
    },
    {
        path: '/Course1',
        component: Course1,
        layout: 'True',
    },
    {
        path: '/Course1/course2',
        component: Course2,
        layout: 'True',
    },
    {
        path: '/Course1/Course2/Course3',
        component: Course3,
        layout: 'True',
    },
    {
        path: '/course',
        component: CoursePage,
        layout: true,
    },
    {
        path: '/course/:id/info',
        component: CourseInfo,
        layout: true,
    },
    {
        path: '/course/:id/grade',
        component: GradeInfo,
        layout: true,
    },
];

export default routes;
