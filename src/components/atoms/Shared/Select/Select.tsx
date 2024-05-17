import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    id?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    className?: string;
}

const Select: React.FC<SelectProps> = ({
    options,
    id,
    name,
    value,
    onChange,
    label,
    className,
    disabled,
    required,
    multiple,
    size,
}) => {
    return (
        <div className={className}>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                disabled={disabled}
                required={required}
                multiple={multiple}
                size={size}
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
