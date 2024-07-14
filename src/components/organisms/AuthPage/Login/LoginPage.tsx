import React, { Suspense } from 'react';
import AuthFormSkeleton from '../../../atoms/Auth/AuthFormSkeleton';
import LoginForm from '../../../molecules/Auth/Login/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <Suspense fallback={<AuthFormSkeleton />}>
            <div className="px-8 md:px-16">
                <LoginForm />
            </div>
        </Suspense>
    );
};

export default LoginPage;
