import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../../models';
import { recoverPasswordUser } from '../../../../services';
import { GetValidationError, SnackbarUtilities } from '../../../../utilities';
import AuthHeader from '../../../atoms/Auth/AuthHeader';
import EmailInput from '../../../atoms/Shared/Input/EmailInput';
import { RecoverFormProvider, useRecoverForm } from './RecoverFormContext';
import SignUpButton from '../../../atoms/Auth/SignUpButton';
import LoginButton from '../../../atoms/Auth/LoginButton';
import Button from '../../../atoms/Shared/Button/Button';

const RecoverComponent: React.FC = () => {
    const navigate = useNavigate();
    const { email, emailValid, handleEmailChange } = useRecoverForm();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleRecover();
    };

    const handleRecover = async () => {
        const errors: string[] = [];

        if (!emailValid) {
            errors.push(GetValidationError('EMAIL_INVALID'));
        }

        if (errors.length > 0) {
            errors.forEach(error => SnackbarUtilities.warning(error));
            return;
        }

        try {
            await recoverPasswordUser(email);
            navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <>
            <AuthHeader
                title="¿Olvidaste tu Contraseña?"
                description="Proporciona tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña."
            />
            <form
                action=""
                className="space-y-6 w-full rounded mt-4"
                onSubmit={handleSubmit}
            >
                <EmailInput value={email} onChange={handleEmailChange} />
                <div className="mt-8 flex flex-col gap-y-4">
                    <Button onClick={handleRecover} type="button">
                        Recuperar
                    </Button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">
                        ¿No tienes una cuenta?
                    </p>
                    <SignUpButton />
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">
                        ¿Ya tienes una cuenta?
                    </p>
                    <LoginButton />
                </div>
            </form>
        </>
    );
};

const RecoverForm: React.FC = () => (
    <RecoverFormProvider>
        <RecoverComponent />
    </RecoverFormProvider>
);

export default RecoverForm;
