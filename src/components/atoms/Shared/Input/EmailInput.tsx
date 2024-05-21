import React from 'react';
import Input from './Input';
import Label from '../Label/Label';

interface EmailInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({
    value,
    onChange,
    readOnly,
}) => {
    return (
        <div>
            <Label htmlFor="email" align="left">
                Correo:
            </Label>
            <Input
                type="text"
                id="email"
                name="email"
                value={value}
                onChange={onChange}
                readOnly={readOnly}
            />
        </div>
    );
};

export default EmailInput;
