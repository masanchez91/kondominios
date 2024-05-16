import React, { Suspense } from 'react';
import { authImages } from '../../../../utilities/authImages';
import LoginForm from '../../../molecules/Auth/Login/LoginForm';
import RandomImageGenerator from '../../../molecules/Shared/RandomImageGenerator';
import AuthFormSkeleton from '../../../atoms/Auth/AuthFormSkeleton';
import { LoginFormProvider } from '../../../molecules/Auth/Login/LoginFormContext';

const LoginPage: React.FC = () => {
    const imagePaths = authImages;

    return (
        <Suspense fallback={<AuthFormSkeleton />}>
            <div className="md:w-1/2 px-8 md:px-16">
                <LoginFormProvider>
                    <LoginForm />
                </LoginFormProvider>
            </div>
            <div className="md:block hidden w-1/2">
                <RandomImageGenerator imagePaths={imagePaths} />
            </div>
        </Suspense>
    );
};

export default LoginPage;
