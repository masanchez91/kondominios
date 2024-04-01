/*import AuthTemplate from "../components/templates/ErrorTemplate";

function LoginPageView() {
	return (
		<AuthTemplate>
			<div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 items-center">
				hola
			</div>
		</AuthTemplate>
	);
}

export default LoginPageView;*/

import ErrorPageView from "../components/organisms/ErrorPage/ErrorPage";
import ErrorPageTemplate from "../components/templates/ErrorTemplate";

const NotFoundPage = () => {
	const status = 404;
	const message = "Página no encontrada.";

	return (
		<ErrorPageTemplate>
			<div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 items-center">
				<ErrorPageView status={status} message={message} />
			</div>
		</ErrorPageTemplate>
	);
};

export default NotFoundPage;
