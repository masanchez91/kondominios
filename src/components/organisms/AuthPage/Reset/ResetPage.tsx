import React, { Suspense } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { authImages } from '../../../../utilities/authImages';
import ResetForm from '../../../molecules/Auth/Reset/ResetForm';
import RandomImageGenerator from '../../../molecules/Shared/RandomImageGenerator';
import AuthFormSkeleton from '../../../atoms/Auth/AuthFormSkeleton';
import { decodeToken, isTokenValid } from '../../../../utilities';
import ExpiredTokenMessage from '../../../molecules/Auth/Reset/ExpiredTokenMessage';

interface ResetTokenPayload {
    id: string;
    name: string;
    email: string;
    tokenExpirationDate: string;
    iat: number;
}

const ResetPage: React.FC = () => {
    const { search } = useLocation();
    const passwordResetToken = new URLSearchParams(search).get('token');
    const imagePaths = authImages;

    if (passwordResetToken) {
        const token = decodeToken<ResetTokenPayload>(passwordResetToken);
        const isValidToken = 'iat' in token && isTokenValid(token.iat);

        return (
            <Suspense fallback={<AuthFormSkeleton />}>
                <div className="md:w-1/2 px-8 md:px-16">
                    {isValidToken ? (
                        <ResetForm decodedToken={token} />
                    ) : (
                        <ExpiredTokenMessage />
                    )}
                </div>
                <div className="md:block hidden w-1/2">
                    <RandomImageGenerator imagePaths={imagePaths} />
                </div>
            </Suspense>
        );
    } else {
        return <Navigate to="/login" />;
    }
};

export default ResetPage;
