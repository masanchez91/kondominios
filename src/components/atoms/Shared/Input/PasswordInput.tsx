import React from 'react';
import Label from '../Label/Label';
import PasswordInput from '../../Auth/PasswordInput';

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInputForm: React.FC<PasswordInputProps> = ({
    value,
    onChange,
}) => {
    return (
        <div>
            <Label htmlFor="password" align="left">
                Contraseña:
            </Label>
            <PasswordInput
                id="password"
                name="password"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default PasswordInputForm;
