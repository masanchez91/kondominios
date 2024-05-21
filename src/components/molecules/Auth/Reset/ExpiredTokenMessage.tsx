import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../atoms/Shared/Button/Button';
import AuthHeader from '../../../atoms/Auth/AuthHeader';

const ExpiredTokenMessage: React.FC = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(15);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate('/login');
        }, 15000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [navigate]);

    const handleRedirect = () => {
        navigate('/login');
    };

    return (
        <>
            <AuthHeader
                title="El token ha expirado"
                description=" El enlace para restablecer tu contraseña ha caducado. Por favor, solicita un nuevo enlace."
            />
            <div className="text-4xl mb-4">😞</div>
            <div className="mt-8 flex flex-col gap-y-4">
                <Button onClick={handleRedirect} type="button">
                    Ir al inicio de sesión
                </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
                Serás redirigido automáticamente en {countdown} segundos.
            </p>
        </>
    );
};

export default ExpiredTokenMessage;
