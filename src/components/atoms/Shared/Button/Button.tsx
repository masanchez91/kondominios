import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 bg-custom-kondominios-blue hover:bg-custom-kondominios-blue-dark rounded-md text-white font-bold text-md"
        >
            {children}
        </button>
    );
};

export default Button;
