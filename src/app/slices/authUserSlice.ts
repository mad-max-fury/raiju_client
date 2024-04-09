import { apiSlice } from "../../api/apiSlice";
import { IUser } from "./authsplice";

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean | undefined;
}

export interface LoginResponse {
  statusCode: number;
  message: string;
  data: { token: string; expiry: string };
}

export interface getUserResponse {
  statusCode: number;
  message: string;
  data: IUser;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: ({ email, password }) => ({
        url: "/auth/signin",
        method: "POST",
        body: { email, password },
      }),
    }),
    getUserProfile: builder.query<getUserResponse, void>({
      query: () => "/merchant/getProfile",
      providesTags: ["User"],
      keepUnusedDataFor: 30,
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetUserProfileQuery } =
  authApiSlice;
