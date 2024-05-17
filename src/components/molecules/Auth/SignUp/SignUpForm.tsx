import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../../models';
import { createUser } from '../../../../redux/states/user';
import { signUpUser } from '../../../../services';
import { GetValidationError, SnackbarUtilities } from '../../../../utilities';
import AuthHeader from '../../../atoms/Auth/AuthHeader';
import ButtonGoogle from '../../../atoms/Auth/ButtonGoogle';
import LoginButton from '../../../atoms/Auth/LoginButton';
import PasswordInput from '../../../atoms/Shared/Input/PasswordInput';
import Button from '../../../atoms/Shared/Button/Button';
import Input from '../../../atoms/Shared/Input/Input';
import Label from '../../../atoms/Shared/Label/Label';
import Select from '../../../atoms/Shared/Select/Select';
import { SignUpFormProvider, useSignUpForm } from './SignUpFormContext';
import EmailInput from '../../../atoms/Shared/Input/EmailInput';

const SignUpComponent: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, validity, handleChange } = useSignUpForm();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSignUp();
    };

    const handleSignUp = async () => {
        const errors: string[] = [];

        if (!validity.passwordValid) {
            errors.push(GetValidationError('PASSWORD_INVALID'));
        }

        if (!validity.emailValid) {
            errors.push(GetValidationError('EMAIL_INVALID'));
        }

        if (!validity.nameValid || !validity.aboutUsValid) {
            errors.push(GetValidationError('INPUT_INVALID'));
        }

        if (errors.length > 0) {
            errors.forEach(error => SnackbarUtilities.warning(error));
            return;
        }

        try {
            const result = await signUpUser(
                form.name,
                form.email,
                form.password,
                form.aboutUs,
            );
            dispatch(createUser({ ...result }));
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <>
            <AuthHeader
                title="Registro"
                description="¿Nuevo por aquí? Regístrate para acceder a nuestra plataforma."
            />
            <form
                className="space-y-6 w-full rounded mt-4"
                onSubmit={handleSubmit}
            >
                <div>
                    <Label htmlFor="name" align="left">
                        Nombre:
                    </Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={e =>
                            handleChange('name', e.target.value, 80, 5)
                        }
                    />
                </div>
                <EmailInput
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value, 0, 0)}
                />
                <PasswordInput
                    value={form.password}
                    onChange={e =>
                        handleChange('password', e.target.value, 0, 0)
                    }
                />
                <div>
                    <Label htmlFor="aboutUs" align="left">
                        ¿Cómo nos conociste?
                    </Label>
                    <Select
                        options={['', 'YouTube', 'Facebook']}
                        id="aboutUs"
                        name="aboutUs"
                        value={form.aboutUs}
                        onChange={e =>
                            handleChange('aboutUs', e.target.value, 20, 3)
                        }
                    />
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <Button onClick={handleSignUp} type="button">
                        Regístrate
                    </Button>
                    <ButtonGoogle label="Regístrate con Google" />
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

const SignUpForm: React.FC = () => (
    <SignUpFormProvider>
        <SignUpComponent />
    </SignUpFormProvider>
);

export default SignUpForm;
