/**
    Debe contener al menos una letra minúscula.
    Debe contener al menos una letra mayúscula.
    Debe contener al menos un dígito.
    Debe contener al menos un carácter especial entre [@$!%*?&].
    La longitud debe estar entre 10 y 18 caracteres.
*/

const IsValidPassword = (password: string): boolean => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,18}$/;
    return passwordRegex.test(password);
};

export default IsValidPassword;
