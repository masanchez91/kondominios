import { Link } from 'react-router-dom';

function SignUpButton() {
    return (
        <Link
            to="/signup"
            className="ml-2 font-medium text-base text-custom-kondominios-blue"
        >
            Registrase
        </Link>
    );
}

export default SignUpButton;
