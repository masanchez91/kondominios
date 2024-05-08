import React, { InputHTMLAttributes, useState } from 'react';
import EyeContainer from './EyeContainer';
import EyeSlashContainer from './EyeSlashContainer';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

const PasswordInput: React.FC<PasswordInputProps> = ({ ...rest }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative">
            <input
                type={passwordVisible ? 'text' : 'password'}
                className="w-full p-2 pr-12 border border-gray-300 rounded mt-1"
                id={rest.id}
                name={rest.name}
                autoComplete="current-password"
                onChange={rest.onChange}
                value={rest.value}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                {passwordVisible ? (
                    <EyeContainer onClick={togglePasswordVisibility} />
                ) : (
                    <EyeSlashContainer onClick={togglePasswordVisibility} />
                )}
            </div>
        </div>
    );
};

export default PasswordInput;
