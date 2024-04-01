import React from "react";

interface LabelProps {
	htmlFor: string;
	children: React.ReactNode;
	align?: "left" | "center" | "right";
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, align = "left" }) => {
	const labelClassName = `text-sm font-bold text-gray-600 block ${
		align === "center"
			? "text-center"
			: align === "right"
			? "text-right"
			: "text-left"
	}`;

	return (
		<label htmlFor={htmlFor} className={labelClassName}>
			{children}
		</label>
	);
};

export default Label;
