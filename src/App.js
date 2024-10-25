import { studentRoutes } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {studentRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    Layout = route.layout !== null ? route.layout : Fragment;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
