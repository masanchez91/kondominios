import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label?: string;
    customClasses?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, customClasses }) => {
    const generateId = () => {
        return (
            id ||
            (label ? label.toLowerCase().replace(/\s+/g, '-') : 'checkbox')
        );
    };

    const defaultClasses = 'h-4 w-4 text-blue-300 rounded';

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className={`${defaultClasses} ${customClasses || ''}`}
                id={generateId()}
            />
            {label && (
                <label
                    htmlFor={generateId()}
                    className="ml-2 text-sm font-bold text-gray-600"
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
