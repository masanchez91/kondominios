import React, { ReactNode } from 'react';

interface ErrorPageTemplateProps {
    children: ReactNode;
}

const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({ children }) => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            {children}
        </section>
    );
};

export default ErrorPageTemplate;
