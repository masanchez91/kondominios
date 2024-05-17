import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../../models';
import { createUser } from '../../../../redux/states/user';
import { loginUser } from '../../../../services';
import { GetValidationError, SnackbarUtilities } from '../../../../utilities';
import AuthHeader from '../../../atoms/Auth/AuthHeader';
import ButtonGoogle from '../../../atoms/Auth/ButtonGoogle';
import DesktopLinkAtom from '../../../atoms/Auth/DesktopLinkAtom';
import MobileLinkAtom from '../../../atoms/Auth/MobileLinkAtom';
import Button from '../../../atoms/Shared/Button/Button';
import Checkbox from '../../../atoms/Shared/Checkbox/Checkbox';
import EmailInput from '../../../atoms/Shared/Input/EmailInput';
import PasswordInput from '../../../atoms/Shared/Input/PasswordInput';
import { LoginFormProvider, useLoginForm } from './LoginFormContext';
import SignUpButton from '../../../atoms/Auth/SignUpButton';

const LoginComponent: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        email,
        password,
        passwordValid,
        emailValid,
        handlePasswordChange,
        handleEmailChange,
    } = useLoginForm();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin();
    };

    const handleLogin = async () => {
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
            const result = await loginUser(email, password);
            dispatch(createUser({ ...result }));
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <>
            <AuthHeader
                title="Acceso"
                description="Si ya eres miembro, inicia sesión fácilmente."
            />
            <form
                action=""
                className="space-y-6 w-full rounded mt-4"
                onSubmit={handleSubmit}
            >
                <EmailInput value={email} onChange={handleEmailChange} />
                <PasswordInput
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <Checkbox id="recuerdame" label="Recuérdame" />
                    <DesktopLinkAtom href="/recover">
                        ¿Has olvidado tu contraseña?
                    </DesktopLinkAtom>
                    <MobileLinkAtom href="/recover">
                        ¿Has olvidado tu contraseña?
                    </MobileLinkAtom>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <Button onClick={handleLogin} type="button">
                        Iniciar sesión
                    </Button>
                    <ButtonGoogle label="Inicia sesión con Google" />
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">
                        ¿No tienes una cuenta?
                    </p>
                    <SignUpButton />
                </div>
            </form>
        </>
    );
};

const LoginForm: React.FC = () => (
    <LoginFormProvider>
        <LoginComponent />
    </LoginFormProvider>
);

export default LoginForm;
