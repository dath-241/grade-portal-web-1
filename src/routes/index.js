import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';

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
];

export default routes;
