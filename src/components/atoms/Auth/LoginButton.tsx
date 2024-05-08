import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login" className="ml-2 font-medium text-base text-blue-600">
      Iniciar Sesion
    </Link>
  );
};

export default LoginButton;
