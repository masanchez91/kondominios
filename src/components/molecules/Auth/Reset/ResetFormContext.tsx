import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResetFormContextType {
    id: string;
    email: string;
    password: string;
    emailValid: boolean;
    passwordValid: boolean;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ResetFormContext = createContext<ResetFormContextType | undefined>(
    undefined,
);

export const useResetForm = (): ResetFormContextType => {
    const context = useContext(ResetFormContext);
    if (!context) {
        throw new Error(
            'useResetForm debe ser usado dentro de un ResetFormProvider',
        );
    }
    return context;
};

interface ResetFormProviderProps {
    children: ReactNode;
    initialId: string;
    initialEmail: string;
}

export const ResetFormProvider: React.FC<ResetFormProviderProps> = ({
    children,
    initialEmail,
    initialId,
}) => {
    const [id] = useState(initialId);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailValid(e.target.validity.valid);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordValid(e.target.validity.valid);
    };

    return (
        <ResetFormContext.Provider
            value={{
                id,
                email,
                password,
                emailValid,
                passwordValid,
                handleEmailChange,
                handlePasswordChange,
            }}
        >
            {children}
        </ResetFormContext.Provider>
    );
};
