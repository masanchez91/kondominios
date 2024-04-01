import React from "react";
import ButtonLink from "../../atoms/Shared/Button/ButtonLink";
import ErrorMessage from "./ErrorMessage";

interface ErrorPageContentProps {
	message: string;
	status: number;
}

const ErrorPageContent: React.FC<ErrorPageContentProps> = ({
	message,
	status,
}) => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<ErrorMessage message={message} status={status} />
			<ButtonLink to="/login">Ir a inicio de sesión</ButtonLink>
		</div>
	);
};

export default ErrorPageContent;
