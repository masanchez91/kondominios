import React, { useState } from 'react';
import EyeContainer from './EyeContainer';
import EyeSlashContainer from './EyeSlashContainer';

type PasswordInputProps = {
    id: string;
    name: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ id, name }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative">
            <input
                type={passwordVisible ? 'text' : 'password'}
                className="w-full p-2 pr-12 border border-gray-300 rounded mt-1"
                id={id}
                name={name}
                autoComplete="current-password"
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
