import { useState } from 'react';
import { IsValidEmail, IsValidPassword } from '../utilities';

const useAuthentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailValid(IsValidEmail(newEmail));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordValid(IsValidPassword(newPassword));
    };

    return {
        email,
        password,
        emailValid,
        passwordValid,
        handleEmailChange,
        handlePasswordChange,
    };
};

export default useAuthentication;
