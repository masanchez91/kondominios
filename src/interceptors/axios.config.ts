import axios, { AxiosInstance } from "axios";

// URL base para las solicitudes
const BASE_URL = "https://8428e26f-e854-47b4-9b67-ceec5b0cc1aa.mock.pstmn.io";

// Configuración base para las solicitudes públicas
const publicAxiosConfig: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Configuración para las solicitudes privadas con credenciales
const privateAxiosConfig: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Función para establecer el encabezado de autorización para solicitudes privadas
export const setHeaders = (accessToken: string | null) => {
  if (accessToken) {
    privateAxiosConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete privateAxiosConfig.defaults.headers.common.Authorization;
  }
};

// Exportar los modelos de Axios
export { privateAxiosConfig, publicAxiosConfig };
