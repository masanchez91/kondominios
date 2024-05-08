import React from "react";

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">{description}</p>
    </>
  );
};

export default AuthHeader;
