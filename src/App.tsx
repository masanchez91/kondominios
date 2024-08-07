import { SnackbarProvider } from 'notistack';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.css';
import { AuthGuard, RoleGuard } from './guards';
import { PrivateRoutes, Roles } from './models';
import { Dashboard } from './pages/Private';
import store from './redux/store';
import { RoutesWithNotFound } from './utilities';
import { SnackbarUtilitiesConfigurator } from './utilities/SnackbarManager';
import Spinner from './components/atoms/Shared/Spinner';

const Private = lazy(() => import('./routes/Private'));
const Public = lazy(() => import('./routes/Public'));

function App() {
    return (
        <div className="font-sans App">
            <SnackbarProvider>
                <SnackbarUtilitiesConfigurator />
                <Suspense fallback={<Spinner />}>
                    <Provider store={store}>
                        <BrowserRouter>
                            <RoutesWithNotFound>
                                <Route
                                    path="/"
                                    element={
                                        <Navigate to={PrivateRoutes.PRIVATE} />
                                    }
                                />
                                <Route path="/*" element={<Public />} />
                                <Route
                                    element={<AuthGuard privateValidation />}
                                >
                                    <Route
                                        path={`${PrivateRoutes.PRIVATE}/*`}
                                        element={<Private />}
                                    />
                                </Route>
                                <Route
                                    element={<RoleGuard rol={Roles.ADMIN} />}
                                >
                                    <Route
                                        path={PrivateRoutes.DASHBOARD}
                                        element={<Dashboard />}
                                    />
                                </Route>
                            </RoutesWithNotFound>
                        </BrowserRouter>
                    </Provider>
                </Suspense>
            </SnackbarProvider>
        </div>
    );
}

export default App;
