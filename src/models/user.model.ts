import { Roles } from "./roles";

export interface UserInfo {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    rol: Roles;
    tokenExpirationDate: string;
    refreshTokenExpirationDate: string;
  };
}
