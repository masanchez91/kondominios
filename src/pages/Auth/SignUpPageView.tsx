import SignUpPage from "../../components/organisms/AuthPage/SignUp/SignUpPage";
import AuthTemplate from "../../components/templates/AuthTemplate";

function SignUpPageView() {
	return (
		<AuthTemplate>
			<div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 items-center">
				<SignUpPage />
			</div>
		</AuthTemplate>
	);
}

export default SignUpPageView;
