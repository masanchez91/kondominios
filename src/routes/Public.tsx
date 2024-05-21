import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PublicRoutes } from '../models';
import { RoutesWithNotFound } from '../utilities';

const Login = lazy(() => import('../pages/Auth/Login/LoginPageView'));
const SignUp = lazy(() => import('../pages/Auth/SingUp/SignUpPageView'));
const Recover = lazy(() => import('../pages/Auth/Recover/RecoverPageView'));
const Reset = lazy(() => import('../pages/Auth/Reset/ResetPageView'));

function Public() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
            <Route path={PublicRoutes.RECOVER} element={<Recover />} />
            <Route path={PublicRoutes.RESET} element={<Reset />} />
        </RoutesWithNotFound>
    );
}

export default Public;
