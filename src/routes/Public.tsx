import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PublicRoutes } from '../models';
import { RoutesWithNotFound } from '../utilities';

const Login = lazy(() => import('../pages/Auth/Login/LoginPageView'));
const SignUp = lazy(() => import('../pages/Auth/SingUp/SignUpPageView'));

function Public() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
        </RoutesWithNotFound>
    );
}

export default Public;
