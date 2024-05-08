import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../models";
import { localStorageClear, localStoragePersist } from "../../utilities";

export const EmptyUserState: UserInfo = {
  accessToken: "",
  refreshToken: "",
  user: {
    id: "",
    name: "",
    username: "",
    email: "",
    rol: Roles.DEFAULT,
    tokenExpirationDate: "",
    refreshTokenExpirationDate: "",
  },
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as "")
    : EmptyUserState,
  reducers: {
    createUser: (_, action) => {
      localStoragePersist<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      localStoragePersist<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      localStorageClear(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
