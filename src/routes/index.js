import StudentLayout from '../components/Layout/StudentLayout/StudentLayout';
import LandingPage from '../pages/LandingPage/LandingPage';
import HomePage from '../pages/StudentPages/HomePage';
import CoursePage from '../pages/StudentPages/CoursePage';
import FramesPage from '../pages/StudentPages/FramesPage';
import CourseInfo from '../pages/StudentPages/CourseInfo';
import GradeInfo from '../pages/StudentPages/GradeInfo';
const routes = [
    {
        path: '/',
        component: LandingPage,
    },
];

const studentRoutes = [
    {
        path: '/home',
        component: HomePage,
        layout: StudentLayout,
    },
    {
        path: '/course',
        component: CoursePage,
        layout: StudentLayout,
    },
    {
        path: '/course/:id/info',
        component: CourseInfo,
        layout: StudentLayout,
    },
    {
        path: '/course/:id/grade',
        component: GradeInfo,
        layout: StudentLayout,
    },
    {
        path: '/frames',
        component: FramesPage,
        layout: StudentLayout,
    },
];
export { routes, studentRoutes };
