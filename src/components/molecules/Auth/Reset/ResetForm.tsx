import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../../models';
import { GetValidationError, SnackbarUtilities } from '../../../../utilities';
import AuthHeader from '../../../atoms/Auth/AuthHeader';
import EmailInput from '../../../atoms/Shared/Input/EmailInput';
import PasswordInput from '../../../atoms/Shared/Input/PasswordInput';
import { ResetFormProvider, useResetForm } from './ResetFormContext';
import LoginButton from '../../../atoms/Auth/LoginButton';
import Button from '../../../atoms/Shared/Button/Button';
import { resetPasswordUser } from '../../../../services';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../../redux/states/user';

interface ResetFormProps {
    decodedToken:
        | {
              id: string;
              name: string;
              email: string;
              tokenExpirationDate: string;
              iat: number;
          }
        | { id: false };
}

const ResetComponent: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        id,
        email,
        password,
        emailValid,
        passwordValid,
        handleEmailChange,
        handlePasswordChange,
    } = useResetForm();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleReset();
    };

    const handleReset = async () => {
        const errors: string[] = [];

        if (!passwordValid) {
            errors.push(GetValidationError('PASSWORD_INVALID'));
        }

        if (!emailValid) {
            errors.push(GetValidationError('EMAIL_INVALID'));
        }

        if (errors.length > 0) {
            errors.forEach(error => SnackbarUtilities.warning(error));
            return;
        }

        try {
            const result = await resetPasswordUser(id, email, password);
            dispatch(createUser({ ...result }));
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <>
            <AuthHeader
                title="Restablecer Contraseña"
                description="Por favor, ingresa tu nueva contraseña para actualizarla."
            />
            <form
                action=""
                className="space-y-6 w-full rounded mt-4"
                onSubmit={handleSubmit}
            >
                <EmailInput
                    value={email}
                    onChange={handleEmailChange}
                    readOnly
                />
                <PasswordInput
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className="mt-8 flex flex-col gap-y-4">
                    <Button onClick={handleReset} type="button">
                        Recuperar
                    </Button>
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

const ResetForm: React.FC<ResetFormProps> = ({ decodedToken }) => {
    const initialEmail = 'email' in decodedToken ? decodedToken.email : '';
    const initialId =
        'id' in decodedToken && decodedToken.id !== false
            ? decodedToken.id
            : '';

    return (
        <ResetFormProvider initialEmail={initialEmail} initialId={initialId}>
            <ResetComponent />
        </ResetFormProvider>
    );
};

export default ResetForm;
