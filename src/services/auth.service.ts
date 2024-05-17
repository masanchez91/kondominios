import { AxiosResponse } from 'axios';
import { publicAxiosConfig, setHeaders } from '../interceptors';
import { LocalStorageKeys, localStorageSave } from '../utilities';
import { UserInfo } from '../models';

const loginEndpoint = '/login';
const signUpEndpoint = '/signup';
const recoverEndpoint = '/recover';

export const loginUser = async (email: string, password: string) => {
    const requestData = {
        email,
        password,
    };

    return publicAxiosConfig.post(loginEndpoint, requestData).then(
        (
            response: AxiosResponse<{
                accessToken: string;
                refreshToken: string;
                user: UserInfo;
            }>,
        ) => {
            const { accessToken, refreshToken } = response.data;

            localStorageSave(LocalStorageKeys.ACCESS_TOKEN, accessToken);
            localStorageSave(LocalStorageKeys.REFRESH_TOKEN, refreshToken);

            setHeaders(accessToken);

            return response.data.user;
        },
    );
};

export const signUpUser = async (
    name: string,
    email: string,
    password: string,
    aboutUs: string,
) => {
    const requestData = {
        name,
        email,
        password,
        aboutUs,
    };

    return publicAxiosConfig.post(signUpEndpoint, requestData).then(
        (
            response: AxiosResponse<{
                accessToken: string;
                refreshToken: string;
                user: UserInfo;
            }>,
        ) => {
            const { accessToken, refreshToken } = response.data;

            localStorageSave(LocalStorageKeys.ACCESS_TOKEN, accessToken);
            localStorageSave(LocalStorageKeys.REFRESH_TOKEN, refreshToken);

            setHeaders(accessToken);

            return response.data.user;
        },
    );
};

export const recoverPasswordUser = async (email: string) => {
    const requestData = {
        email,
    };

    return publicAxiosConfig
        .post(recoverEndpoint, requestData)
        .then((response: AxiosResponse<Record<string, never>>) => {
            return response.data;
        });
};
