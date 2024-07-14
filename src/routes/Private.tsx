import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import SiderbarPageTemplate from '../components/templates/SidebarTemplate';
import { PrivateRoutes } from '../models';
import { RoutesWithNotFound } from '../utilities';

const Dashboard = lazy(
    () => import('../pages/Private/Dashboard/DashboardPageView'),
);
const Clients = lazy(() => import('../pages/Private/Clients/ClientsPageView'));
const Articles = lazy(
    () => import('../pages/Private/Articles/ArticlesPageView'),
);
const Invoices = lazy(
    () => import('../pages/Private/Invoices/InvoicesPageView'),
);
const CreditBalance = lazy(
    () => import('../pages/Private/CreditBalance/CreditBalancePageView'),
);
const Notifications = lazy(
    () => import('../pages/Private/Notifications/NotificationsPageView'),
);
const Reports = lazy(() => import('../pages/Private/Reports/ReportsPageView'));
const Help = lazy(() => import('../pages/Private/Help/HelpPageView'));
const Support = lazy(() => import('../pages/Private/Support/SupportPageView'));
const Account = lazy(() => import('../pages/Private/Account/AccountPageView'));
const Billing = lazy(() => import('../pages/Private/Billing/BillingPageView'));
const Tutorial = lazy(
    () => import('../pages/Private/Tutorial/TutorialPageView'),
);
const Settings = lazy(
    () => import('../pages/Private/Settings/SettingsPageView'),
);

function Private() {
    return (
        <>
            <SiderbarPageTemplate />
            <RoutesWithNotFound>
                <Route
                    path="/"
                    element={<Navigate to={PrivateRoutes.DASHBOARD} />}
                />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.INVOICES} element={<Invoices />} />
                <Route path={PrivateRoutes.CLIENTS} element={<Clients />} />
                <Route path={PrivateRoutes.ARTICLES} element={<Articles />} />
                <Route
                    path={PrivateRoutes.CREDIT_BALANCE}
                    element={<CreditBalance />}
                />
                <Route path={PrivateRoutes.REPORTS} element={<Reports />} />
                <Route
                    path={PrivateRoutes.NOTIFICATIONS}
                    element={<Notifications />}
                />
                <Route path={PrivateRoutes.HELP} element={<Help />} />
                <Route path={PrivateRoutes.SUPPORT} element={<Support />} />
                <Route path={PrivateRoutes.ACCOUNT} element={<Account />} />
                <Route path={PrivateRoutes.BILLING} element={<Billing />} />
                <Route path={PrivateRoutes.TUTORIAL} element={<Tutorial />} />
                <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
            </RoutesWithNotFound>
        </>
    );
}
export default Private;
