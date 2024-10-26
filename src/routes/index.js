import Controller from '../pages/AdminPages/Controller';
import Course1 from '../pages/AdminPages/Course1';
import Course2 from '../pages/AdminPages/Course2';
import Course3 from '../pages/AdminPages/Course3';
const routes = [
    {
        path: '/',
        component: Controller,
        layout: 'True',
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
];

export default routes;
