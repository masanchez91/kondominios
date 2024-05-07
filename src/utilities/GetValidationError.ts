import { TypeWithKey } from "../models/typeWithKey";

// Define un tipo para los códigos de error
type ErrorCode = keyof TypeWithKey<string>;

export const GetValidationError = (errorCode: ErrorCode): string => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Se rompió la red",
    ERR_TIMEOUT: "Se acabó el tiempo",
    ERR_CANCEL: "Se canceló la petición",
    ERR_UNKNOWN: "Error desconocido",
    ERR_BAD_REQUEST: "Problemas de permisos o autenticación",
    ERR_400: "Error 400",
    ERR_401: "Error 401",
    ERR_403: "Error 403",
  };

  return codeMatcher[errorCode] ?? "Error desconocido";
};
