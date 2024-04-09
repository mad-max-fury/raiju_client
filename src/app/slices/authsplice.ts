import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IUser {
  businessId: string;
  primaryContactDesignation: string;
  primaryContactLastName: string;
  businessAddress: string;
  businessName: string;
  primaryContactFirstName: string;
  state: string;
  primaryContactPhone: string;
  cacNumber: string;
  createAt: string;
  updatedAt: string;
  primaryContactEmail: string;
  SK: string;
  PK: string;
  id: string;
  primaryContactBVN: string;
  businessPhone: string;
}

export interface AuthState {
  user: IUser | null;
  token: string | null;
  isLoggedIn: boolean | null;
  expiry: string | null;
}

export interface SetAuthTokenPayload {
  token: string;
  expiry: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: null,
    expiry: null,
  } as AuthState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<SetAuthTokenPayload>) => {
      const { token, expiry } = action.payload;
      state.token = token;
      state.expiry = expiry;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      const user = action.payload;
      console.log(user);
      state.user = user;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = null;
      state.expiry = null;
    },
  },
});

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getToken = (state: RootState) => state.auth.token;
export const getUser = (state: RootState) => state.auth.user;
export const getAuth = (state: RootState) => state.auth;
export const { logoutUser, setAuthToken, setUser } = authSlice.actions;
export default authSlice.reducer;
