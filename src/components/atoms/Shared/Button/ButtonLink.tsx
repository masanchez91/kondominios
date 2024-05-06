import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
	to: string;
	children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children }) => {
	return (
		<Link
			to={to}
			className={
				"block w-full mx-auto my-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold text-md text-center"
			}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
