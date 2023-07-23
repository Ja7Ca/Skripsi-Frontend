import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const kelasSlice = createApi({
    reducerPath: "kelasSlice",
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
    tagTypes: ["Kelas"],
    endpoints: (builder) => ({
        getKelas: builder.query({
            query: () => ({
                url: `/kelas`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Kelas"],
        }),
        getKelasKosong: builder.query({
            query: () => ({
                url: `/kelas-kosong`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Kelas"],
        }),
    }),
});
export const { useGetKelasQuery, useGetKelasKosongQuery } = kelasSlice;
