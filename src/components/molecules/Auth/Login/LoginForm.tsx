import React from "react";
import AuthFormSkeleton from "../../../atoms/Auth/AuthFormSkeleton";
import AuthHeader from "../../../atoms/Auth/AuthHeader";
import ButtonGoogle from "../../../atoms/Auth/ButtonGoogle";
import DesktopLinkAtom from "../../../atoms/Auth/DesktopLinkAtom";
import MobileLinkAtom from "../../../atoms/Auth/MobileLinkAtom";
import PasswordInput from "../../../atoms/Auth/PasswordInput";
import SignUpButton from "../../../atoms/Auth/SignUpButton";
import Button from "../../../atoms/Shared/Button/Button";
import Checkbox from "../../../atoms/Shared/Checkbox/Checkbox";
import Input from "../../../atoms/Shared/Input/Input";
import Label from "../../../atoms/Shared/Label/Label";
interface LoginFormProps {
	loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ loading }) => {
	if (loading) {
		return <AuthFormSkeleton />;
	}

	return (
		<>
			<AuthHeader
				title="Acceso"
				description="Si ya eres miembro, inicia sesión fácilmente."
			/>
			<form action="" className="space-y-6 w-full rounded mt-4">
				<div>
					<Label htmlFor="email" align="left">
						Correo:
					</Label>
					<Input type="text" id="email" name="email" />
				</div>
				<div>
					<Label htmlFor="password" align="left">
						Contraseña:
					</Label>
					<PasswordInput id="password" name="password" />
				</div>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between">
					<Checkbox id="recuerdame" label="Recuérdame" />
					<DesktopLinkAtom href="">
						¿Has olvidado tu contraseña?
					</DesktopLinkAtom>
					<MobileLinkAtom href="">¿Has olvidado tu contraseña?</MobileLinkAtom>
				</div>
				<div className="mt-8 flex flex-col gap-y-4">
					<Button type="submit">Iniciar sesión</Button>
					<ButtonGoogle label={"Inicia sesión con Google"} />
				</div>
				<div className="mt-8 flex justify-center items-center">
					<p className="font-medium text-base">¿No tienes una cuenta?</p>
					<SignUpButton />
				</div>
			</form>
		</>
	);
};

export default LoginForm;
