import React from "react";
import ButtonLink from "../../atoms/Shared/Button/ButtonLink";
import UndrawTakenIcon from "../../icons/UndrawTakenIcon";
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
		<>
			<div className="space-y-6 w-full rounded mt-4">
				<ErrorMessage message={message} status={status} />
				<UndrawTakenIcon />
				<div className="mt-8 flex flex-col gap-y-4">
					<ButtonLink to="/login">Regresar</ButtonLink>
				</div>
			</div>
		</>
	);
};

export default ErrorPageContent;
