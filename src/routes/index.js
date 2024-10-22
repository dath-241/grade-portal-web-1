import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Student1 from '../pages/Student/Student1'; // Cập nhật đường dẫn ở đây
import Teacher1 from '../pages/Teacher/Teacher1'; // Cập nhật đường dẫn ở đây

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
        path: '/controlstudents',
        component: Student1,
        layout: true,
    },
    {
        path: '/controlteachers',
        component: Teacher1,
        layout: true,
    },
];

export default routes;
