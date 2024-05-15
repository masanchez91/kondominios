import { useState } from 'react';
import { IsValidEmail, IsValidPassword } from '../utilities';

export const useAuthentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
        setPasswordValid(IsValidPassword(newPassword));
    };

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
        setEmailValid(IsValidEmail(newEmail));
    };

    return {
        email,
        password,
        passwordValid,
        emailValid,
        handlePasswordChange,
        handleEmailChange,
    };
};
