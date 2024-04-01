import React, { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
	const id = props.id || label.toLowerCase().replace(/\s+/g, "-");
	return (
		<div className="flex items-center">
			<input
				type="checkbox"
				className="h-4 w-4 text-blue-300 rounded"
				id={id}
				{...props}
			/>
			<label htmlFor={id} className="ml-2 text-sm font-bold text-gray-600">
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
