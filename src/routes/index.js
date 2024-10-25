import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Controller from '../pages/Admin/Controller';
import AddTeacher from '../pages/Admin/AddTeacher';
import AddStudent from '../pages/Admin/AddStudent';

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
        path: '/controller',
        component: Controller,
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
];

export default routes;
