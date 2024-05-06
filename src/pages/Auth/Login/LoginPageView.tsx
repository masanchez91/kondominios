import LoginPage from "../../../components/organisms/AuthPage/Login/LoginPage";
import AuthTemplate from "../../../components/templates/AuthTemplate";

function LoginPageView() {
  return (
    <AuthTemplate>
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 items-center">
        <LoginPage />
      </div>
    </AuthTemplate>
  );
}

export default LoginPageView;
