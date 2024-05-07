import { AxiosResponse, AxiosError } from "axios";
import { publicAxiosConfig, setHeaders } from "../interceptors";
import { LocalStorageKeys, localStorageSave } from "../utilities";

const loginEndpoint = "/login";

export const loginUser = async () => {
  const requestData = {
    email: "mauro@gmail.com",
    password: "1234567",
  };

  return publicAxiosConfig
    .post(loginEndpoint, requestData)
    .then((response: AxiosResponse<any>) => {
      const { accessToken, refreshToken } = response.data;

      localStorageSave(LocalStorageKeys.ACCESS_TOKEN, accessToken);
      localStorageSave(LocalStorageKeys.REFRESH_TOKEN, refreshToken);

      setHeaders(accessToken);

      return response.data.user;
    })
    .catch((error: AxiosError<any>) => {
      // Aquí puedes manejar errores de red o del servidor
      console.error("There was an error!", error);
      throw error;
    });
};
