import React from "react";
import AuthFormSkeleton from "../../../atoms/Auth/AuthFormSkeleton";
import AuthHeader from "../../../atoms/Auth/AuthHeader";
import ButtonGoogle from "../../../atoms/Auth/ButtonGoogle";
import LoginButton from "../../../atoms/Auth/LoginButton";
import PasswordInput from "../../../atoms/Auth/PasswordInput";
import Button from "../../../atoms/Shared/Button/Button";
import Input from "../../../atoms/Shared/Input/Input";
import Label from "../../../atoms/Shared/Label/Label";
import Select from "../../../atoms/Shared/Select/Select";

interface SignUpFormFormProps {
  loading: boolean;
}

const SignUpForm: React.FC<SignUpFormFormProps> = ({ loading }) => {
  if (loading) {
    return <AuthFormSkeleton />;
  }

  return (
    <>
      <AuthHeader
        title="Registro"
        description="¿Nuevo por aquí? Regístrate para acceder a nuestra plataforma."
      />
      <form action="" className="space-y-6 w-full rounded mt-4">
        <div>
          <Label htmlFor="name" align="left">
            Nombre:
          </Label>
          <Input type="text" id="name" name="name" />
        </div>
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
        <div>
          <Label htmlFor="fuente" align="left">
            ¿Cómo nos conociste?
          </Label>
          <Select options={["YouTube", "Facebook"]} id="fuente" />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <Button type="submit">Regístrate</Button>
          <ButtonGoogle label={"Regístrate con Google"} />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">¿Ya tienes una cuenta?</p>
          <LoginButton />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
