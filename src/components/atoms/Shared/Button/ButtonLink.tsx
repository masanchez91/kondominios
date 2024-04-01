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
				"active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold text-md"
			}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
