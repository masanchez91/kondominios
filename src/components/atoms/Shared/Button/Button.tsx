import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  return (
    <button
      type={type}
      className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold text-md"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
