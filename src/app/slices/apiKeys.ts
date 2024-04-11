import { apiSlice } from "../../api/apiSlice";
export interface createApiKeyResponse {
  statusCode: number;
  message: string;
  data: {
    publicKey: string;
    secretKey: string;
  };
}

export interface getApiKeyResponse {
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  domain: string;
  publicKey: string;
}

export const generateApiKeySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApiKey: builder.query<getApiKeyResponse, void>({
      query: () => ({
        url: "/merchant/api/getKeys",
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Key"],
    }),
    createApiKey: builder.mutation<createApiKeyResponse, { env: string }>({
      query: ({ env }) => ({
        url: `/merchant/api/generateKeys?env=${env}`,
        method: "POST",
        body: { env },
      }),
      invalidatesTags: ["Key"],
    }),
  }),
});

export const { useGetApiKeyQuery, useCreateApiKeyMutation } =
  generateApiKeySlice;
