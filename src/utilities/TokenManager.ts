import { jwtDecode } from 'jwt-decode';
import { localStorageGet, LocalStorageKeys } from '.';

export const decodeToken = <T>(
    accessToken: string | null,
): T | { id: false } => {
    try {
        return jwtDecode<T>(accessToken as string);
    } catch (error) {
        return { id: false };
    }
};

export const decodeTokenLocalStorage = <T>(): T | { id: false } => {
    try {
        return jwtDecode<T>(
            localStorageGet(LocalStorageKeys.ACCESS_TOKEN) as string,
        );
    } catch (error) {
        return { id: false };
    }
};

export function isTokenValid(tokenExpirationTimestamp: number): boolean {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return currentTimestamp < tokenExpirationTimestamp;
}
