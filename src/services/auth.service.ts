import { AxiosResponse } from 'axios';
import { publicAxiosConfig, setHeaders } from '../interceptors';
import { LocalStorageKeys, localStorageSave } from '../utilities';
import { UserInfo } from '../models';

const loginEndpoint = '/login';

export const loginUser = async () => {
    const requestData = {
        email: 'mauro@gmail.com',
        password: '1234567',
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
