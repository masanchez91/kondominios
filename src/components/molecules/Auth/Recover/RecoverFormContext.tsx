import React, { ReactNode, createContext, useContext } from 'react';
import useAuthentication from '../../../../hooks/useAuthentication';

interface RecoverFormContextType {
    email: string;
    emailValid: boolean;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RecoverFormContext = createContext<RecoverFormContextType | undefined>(
    undefined,
);

export const useRecoverForm = () => {
    const context = useContext(RecoverFormContext);
    if (!context) {
        throw new Error(
            'useRecoverForm debe ser usado dentro de un RecoverFormProvider',
        );
    }
    return context;
};

interface AuthRecoverProps {
    children: ReactNode;
}

export const RecoverFormProvider: React.FC<AuthRecoverProps> = ({
    children,
}) => {
    const authState = useAuthentication();

    return (
        <RecoverFormContext.Provider value={authState}>
            {children}
        </RecoverFormContext.Provider>
    );
};
