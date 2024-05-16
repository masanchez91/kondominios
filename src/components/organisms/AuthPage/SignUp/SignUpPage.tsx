import React, { Suspense } from 'react';
import { authImages } from '../../../../utilities/authImages';
import SignUpForm from '../../../molecules/Auth/SignUp/SignUpForm';
import RandomImageGenerator from '../../../molecules/Shared/RandomImageGenerator';
import AuthFormSkeleton from '../../../atoms/Auth/AuthFormSkeleton';

const SignUpPage: React.FC = () => {
    const imagePaths = authImages;

    return (
        <Suspense fallback={<AuthFormSkeleton />}>
            <div className="md:w-1/2 px-8 md:px-16">
                <SignUpForm />
            </div>
            <div className="md:block hidden w-1/2">
                <RandomImageGenerator imagePaths={imagePaths} />
            </div>
        </Suspense>
    );
};

export default SignUpPage;
