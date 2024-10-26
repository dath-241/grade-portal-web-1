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
import FacultyList from '../pages/Admin/FacultyList';
import SubjectList from '../pages/Admin/SubjectList ';
import ClassList from '../pages/Admin/ClassList ';
import StudentsInfo from '../pages/Student/StudentsInfo';
import TeachersInfo from '../pages/Teacher/TeachersInfo';

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
        path: '/courses',
        component: CoursePage,
        layout: true,
    },
    {
        path: '/management/faculty-list',
        component: FacultyList,
        layout: true,
    },
    {
        path: '/management/subject-list',
        component: SubjectList,
        layout: true,
    },
    {
        path: '/management/class-list',
        component: ClassList,
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
    {
        path: '/management/students',
        component: StudentsInfo,
        layout: true,
    },
    {
        path: '/management/teachers',
        component: TeachersInfo,
        layout: true,
    },
];

export default routes;
