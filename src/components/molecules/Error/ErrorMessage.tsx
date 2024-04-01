import React from "react";
import TextHeading from "../../atoms/Error/TextHeading";
import TextParagraph from "../../atoms/Error/TextParagraph";

interface ErrorMessageProps {
	message: string;
	status: number;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, status }) => {
	return (
		<>
			<TextHeading>{message}</TextHeading>
			<TextParagraph>{status}</TextParagraph>
		</>
	);
};

export default ErrorMessage;
