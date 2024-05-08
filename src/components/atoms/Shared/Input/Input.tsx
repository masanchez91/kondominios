import React, { InputHTMLAttributes } from 'react';

type InputProps = {
    type?: string;
    id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ type, id }) => {
    return (
        <input
            type={type}
            id={id}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            autoComplete="current-password"
        />
    );
};

export default Input;
