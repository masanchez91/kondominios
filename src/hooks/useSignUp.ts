import { useState } from 'react';
import { ValidateLength, IsValidEmail, IsValidPassword } from '../utilities';

const useSignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        aboutUs: '',
    });

    const [validity, setValidity] = useState({
        nameValid: false,
        emailValid: false,
        passwordValid: false,
        aboutUsValid: false,
    });

    const handleChange = (
        field: string,
        value: string,
        maxLength: number,
        minLength: number,
    ) => {
        setForm(prevForm => ({ ...prevForm, [field]: value }));
        let isValid = true;

        if (field === 'email') {
            isValid = IsValidEmail(value);
        } else if (field === 'password') {
            isValid = IsValidPassword(value);
        } else {
            isValid = ValidateLength(value, maxLength, minLength);
        }

        setValidity(prevValidity => ({
            ...prevValidity,
            [`${field}Valid`]: isValid,
        }));
    };

    return {
        form,
        validity,
        handleChange,
    };
};

export default useSignUp;
