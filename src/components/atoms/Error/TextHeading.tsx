import React from "react";

interface TextHeadingProps {
	children: React.ReactNode;
}

const TextHeading: React.FC<TextHeadingProps> = ({ children }) => {
	return <h1 className="text-4xl font-bold mb-4">{children}</h1>;
};

export default TextHeading;
