import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../models';
import { RoutesWithNotFound } from '../utilities';

const Dashboard = lazy(
    () => import('../pages/Private/Dashboard/DashboardPageView'),
);
const Clients = lazy(() => import('../pages/Private/Clients/ClientsPageView'));

function Private() {
    return (
        <RoutesWithNotFound>
            <Route
                path="/"
                element={<Navigate to={PrivateRoutes.DASHBOARD} />}
            />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.CLIENTS} element={<Clients />} />
        </RoutesWithNotFound>
    );
}
export default Private;
