import React from "react";

interface ErrorPageProps {
	status: number;
	message: string;
}

const ErrorHeader: React.FC<ErrorPageProps> = ({ status, message }) => {
	return (
		<>
			<h1 className="text-4xl font-bold mb-4 text-red-600">{message}</h1>
			<p className="text-lg">{status}</p>
		</>
	);
};

export default ErrorHeader;
