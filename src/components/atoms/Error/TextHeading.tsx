import React from "react";

interface TextHeadingProps {
	children: React.ReactNode;
}

const TextHeading: React.FC<TextHeadingProps> = ({ children }) => {
	return (
		<h1 className="text-3xl font-semibold mb-4 text-red-600">{children}</h1>
	);
};

export default TextHeading;
