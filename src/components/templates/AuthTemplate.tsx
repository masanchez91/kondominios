import React, { ReactNode } from 'react';

interface AuthTemplateProps {
    children: ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
            {children}
        </section>
    );
};

export default AuthTemplate;
