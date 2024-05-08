import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    id?: string;
}

const Select: React.FC<SelectProps> = ({ options }) => {
    return (
        <select className="w-full p-2 border border-gray-300 rounded mt-1">
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
