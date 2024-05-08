import React from 'react';
import ErrorPageContent from '../../molecules/Error/ErrorPageContent';

interface ErrorPageViewProps {
    status: number;
    message: string;
}

const ErrorPageView: React.FC<ErrorPageViewProps> = ({ status, message }) => {
    return <ErrorPageContent status={status} message={message} />;
};

export default ErrorPageView;
