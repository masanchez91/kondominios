import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../models';
import { RoutesWithNotFound } from '../utilities';
import Sidebar from '../components/organisms/SidebarPage';

const Dashboard = lazy(
    () => import('../pages/Private/Dashboard/DashboardPageView'),
);
const Clients = lazy(() => import('../pages/Private/Clients/ClientsPageView'));
const Help = lazy(() => import('../pages/Private/Help/HelpPageView'));
const Settings = lazy(
    () => import('../pages/Private/Settings/SettingsPageView'),
);

function Private() {
    return (
        <>
            <Sidebar />
            <RoutesWithNotFound>
                <Route
                    path="/"
                    element={<Navigate to={PrivateRoutes.DASHBOARD} />}
                />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.CLIENTS} element={<Clients />} />
                <Route path={PrivateRoutes.HELP} element={<Help />} />
                <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
            </RoutesWithNotFound>
        </>
    );
}
export default Private;
