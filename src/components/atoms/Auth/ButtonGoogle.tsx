import React from 'react';
import GoogleIcon from '../../icons/GoogleIcon';

type ButtonProps = {
    label: string;
    onClick?: () => void;
};

const ButtonGoogle: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            type="submit"
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 rounded-md text-gray-700 font-semibold text-md border-2 border-gray-200"
            onClick={onClick}
        >
            <GoogleIcon />
            {label}
        </button>
    );
};

export default ButtonGoogle;
