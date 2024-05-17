import React, { ReactNode, createContext, useContext } from 'react';
import useSignUp from '../../../../hooks/useSignUp';

interface SignUpFormContextType {
    form: {
        name: string;
        email: string;
        password: string;
        aboutUs: string;
    };
    validity: {
        nameValid: boolean;
        emailValid: boolean;
        passwordValid: boolean;
        aboutUsValid: boolean;
    };
    handleChange: (
        field: string,
        value: string,
        maxLength: number,
        minLength: number,
    ) => void;
}

const SignUpFormContext = createContext<SignUpFormContextType | undefined>(
    undefined,
);

export const useSignUpForm = () => {
    const context = useContext(SignUpFormContext);
    if (!context) {
        throw new Error(
            'useSignUpForm debe ser usado dentro de un SignUpFormProvider',
        );
    }
    return context;
};

interface AuthSignUpProps {
    children: ReactNode;
}

export const SignUpFormProvider: React.FC<AuthSignUpProps> = ({ children }) => {
    const authState = useSignUp();

    return (
        <SignUpFormContext.Provider value={authState}>
            {children}
        </SignUpFormContext.Provider>
    );
};
