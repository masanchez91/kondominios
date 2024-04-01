import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "../../components/atoms/Shared/Spinner";

const ErrorPageView = lazy(() => import("../../pages/NotFoundPageView"));
const LoginPageView = lazy(() => import("../../pages/Auth/LoginPageView"));
const SignUpPageView = lazy(() => import("../../pages/Auth/SignUpPageView"));

const AuthRoutes: React.FC = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="*" element={<ErrorPageView />} />
				<Route path="/login" element={<LoginPageView />} />
				<Route path="/signup" element={<SignUpPageView />} />
			</Routes>
		</Suspense>
	);
};

export default AuthRoutes;
