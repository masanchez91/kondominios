import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ type, ...rest }) => {
    return (
        <input
            type={type}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            autoComplete="current-password"
            id={rest.id}
            name={rest.name}
            onChange={rest.onChange}
            value={rest.value}
            readOnly={rest.readOnly}
        />
    );
};

export default Input;
