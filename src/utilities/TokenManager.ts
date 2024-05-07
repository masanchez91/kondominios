import { jwtDecode } from 'jwt-decode';
import { localStorageGet, LocalStorageKeys } from '../utilities';

export const decodeToken = (accessToken: string | null) => {
    try {
        return jwtDecode(accessToken as string);
    } catch (error) {
        return { id: false };
    }
};

export const decodeTokenLocalStorage = () => {
    try {
        return jwtDecode(localStorageGet(LocalStorageKeys.ACCESS_TOKEN) as string);
    } catch (error) {
        return { id: false };
    }
};