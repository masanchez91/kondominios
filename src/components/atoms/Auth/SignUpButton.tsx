import { Link } from 'react-router-dom';

function SignUpButton() {
    return (
        <Link to="/signup" className="ml-2 font-medium text-base text-blue-600">
            Registrase
        </Link>
    );
}

export default SignUpButton;
