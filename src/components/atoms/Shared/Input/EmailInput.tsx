import React from 'react';
import Input from './Input';
import Label from '../Label/Label';

interface EmailInputProps {
    value: string;
    onChange: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
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
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default EmailInput;
