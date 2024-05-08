import { Roles } from "./roles";

export interface UserInfo {
  id: string;
  name: string;
  username: string;
  email: string;
  rol: Roles;
  tokenExpirationDate: string;
  refreshTokenExpirationDate: string;
};
