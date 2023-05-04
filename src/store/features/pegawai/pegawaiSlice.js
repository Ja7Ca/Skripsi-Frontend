import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const pegawaiSlice = createApi({
    reducerPath: "pegawaiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: CONST.BASE_URL,
        prepareHeaders: (headers) => {
            const token = Auth.getAccessToken();

            if (token) {
                headers.set("Authorization", `${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ["Pegawai"],
    endpoints: (builder) => ({
        getPegawai: builder.query({
            query: () => ({
                url: "/pegawai",
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["pegawai"],
        }),
    }),
});
export const { useGetPegawaiQuery } = pegawaiSlice;
