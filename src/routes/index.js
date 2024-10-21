import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../components/Login/Login';
import HOF from '../components/HOF/HOF';

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/hof',
        component: HOF,
    },
];

export default routes;
