import React, { useEffect, useState } from "react";
import { authImages } from "../../../../utilities/authImages";
import SignUpForm from "../../../molecules/Auth/SignUp/SignUpForm";
import RandomImageGenerator from "../../../molecules/Shared/RandomImageGenerator";

const LoginPage: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const imagePaths = authImages;

	return (
		<>
			<div className="md:w-1/2 px-8 md:px-16">
				<SignUpForm loading={loading} />
			</div>

			<div className="md:block hidden w-1/2">
				<RandomImageGenerator imagePaths={imagePaths} />
			</div>
		</>
	);
};

export default LoginPage;
