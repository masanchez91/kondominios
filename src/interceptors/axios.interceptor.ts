import {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from 'axios';
import { UserKey } from '../redux/states/user';
import {
    GetValidationError,
    LocalStorageKeys,
    localStorageClear,
    localStorageGet,
    SnackbarUtilities,
} from '../utilities';
import { privateAxiosConfig, publicAxiosConfig } from './axios.config';

// Define un tipo de solicitud interno que extiende AxiosRequestConfig
interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
}

/**
 * Función para actualizar los encabezados de la solicitud con el token de autorización.
 * @param request Configuración de la solicitud Axios.
 * @returns La configuración de la solicitud actualizada.
 */
const updateHeader = (
    request: AdaptAxiosRequestConfig,
): AdaptAxiosRequestConfig => {
    // Obtiene el token de autorización del almacenamiento local
    const token = localStorageGet(LocalStorageKeys.ACCESS_TOKEN);
    // Si no hay token en el almacenamiento local, intenta obtenerlo de la sesión actual
    const tokenData = window.localStorage.getItem('token') || token;

    // Agrega el token de autorización y el tipo de contenido a los encabezados de la solicitud
    request.headers.Authorization = `Bearer ${tokenData}`;
    request.headers['Content-Type'] = 'application/json';

    return request;
};

/**
 * Función para agregar interceptores a la instancia de Axios.
 */
export const AxiosInterceptor = () => {
    // Crea una instancia de Axios con la configuración base
    const axiosInstancePrivate: AxiosInstance = privateAxiosConfig;
    const axiosInstancePublic: AxiosInstance = publicAxiosConfig;

    // Interceptor de solicitud de Axios
    axiosInstancePrivate.interceptors.request.use(
        (config: AdaptAxiosRequestConfig) => {
            // Verifica si la solicitud ya tiene un token de autorización en los encabezados
            if (!config.headers.Authorization) {
                // Si no tiene token de autorización, actualiza los encabezados con el token
                const updatedConfig = updateHeader(config);
                return updatedConfig;
            }

            return config;
        },
        error => {
            // Manejar errores de solicitud
            return Promise.reject(error);
        },
    );

    // Interceptor de respuesta de Axios
    axiosInstancePrivate.interceptors.response.use(
        (response: AxiosResponse) => {
            // Muestra una notificación de éxito
            SnackbarUtilities.success('Acción exitosa');
            return response;
        },
        error => {
            // Muestra una notificación de error basada en el tipo de error
            localStorageClear(UserKey);
            localStorageClear(LocalStorageKeys.ACCESS_TOKEN);
            localStorageClear(LocalStorageKeys.REFRESH_TOKEN);
            SnackbarUtilities.error(GetValidationError(error.code));
            return Promise.reject(error);
        },
    );

    // Interceptor de solicitud de Axios
    axiosInstancePublic.interceptors.request.use(
        (config: AdaptAxiosRequestConfig) => {
            // Verifica si la solicitud ya tiene un token de autorización en los encabezados
            if (!config.headers.Authorization) {
                // Si no tiene token de autorización, actualiza los encabezados con el token
                const updatedConfig = updateHeader(config);
                return updatedConfig;
            }

            return config;
        },
        error => {
            // Manejar errores de solicitud
            return Promise.reject(error);
        },
    );

    // Interceptor de respuesta de Axios
    axiosInstancePublic.interceptors.response.use(
        (response: AxiosResponse) => {
            // Muestra una notificación de éxito
            SnackbarUtilities.success('Acción exitosa');
            return response;
        },
        error => {
            // Muestra una notificación de error basada en el tipo de error
            localStorageClear(UserKey);
            localStorageClear(LocalStorageKeys.ACCESS_TOKEN);
            localStorageClear(LocalStorageKeys.REFRESH_TOKEN);
            SnackbarUtilities.error(GetValidationError(error.code));
            return Promise.reject(error);
        },
    );
};
