import routes from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/Layout';
import { Fragment } from 'react';
import ProtectedRoute from './components/Login/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    const Layout = route.layout ? DefaultLayout : Fragment;
                    const allowedRoles = route.allowedRoles || [];

                    const element = (
                        <Layout>
                            <Page />
                        </Layout>
                    );

                    return route.protected ? (
                        <Route
                            key={index}
                            path={route.path}
                            element={<ProtectedRoute allowedRoles={allowedRoles}>{element}</ProtectedRoute>}
                        />
                    ) : (
                        // Route công khai không cần bảo vệ
                        <Route key={index} path={route.path} element={element} />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
