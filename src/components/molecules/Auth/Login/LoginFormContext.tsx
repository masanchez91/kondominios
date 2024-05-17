import React, { ReactNode, createContext, useContext } from 'react';
import useAuthentication from '../../../../hooks/useAuthentication';

interface LoginFormContextType {
    email: string;
    password: string;
    emailValid: boolean;
    passwordValid: boolean;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginFormContext = createContext<LoginFormContextType | undefined>(
    undefined,
);

export const useLoginForm = () => {
    const context = useContext(LoginFormContext);
    if (!context) {
        throw new Error(
            'useLoginForm debe ser usado dentro de un LoginFormProvider',
        );
    }
    return context;
};

interface AuthLoginProps {
    children: ReactNode;
}

export const LoginFormProvider: React.FC<AuthLoginProps> = ({ children }) => {
    const authState = useAuthentication();

    return (
        <LoginFormContext.Provider value={authState}>
            {children}
        </LoginFormContext.Provider>
    );
};
