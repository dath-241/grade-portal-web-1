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
    {
        path: '/home',
        component: HomePage,
        layout: true,
    },
    {
        path: '/course',
        component: CoursePage,
        layout:true,
    },
    {
        path:'/course/:id/info',
        component: CourseInfo,
        layout: true
    },
    {
        path:'/course/:id/grade',
        component: GradeInfo,
        layout: true
    },
    {
        path:'/frames',
        component: FramesPage,
        layout: true
    }
];

export default routes;
