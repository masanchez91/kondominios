import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ type, ...props }) => {
  return (
    <input
      type={type}
      className="w-full p-2 border border-gray-300 rounded mt-1"
      autoComplete="current-password"
      {...props}
    />
  );
};

export default Input;
