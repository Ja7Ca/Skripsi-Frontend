import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const sikapSlice = createApi({
    reducerPath: "sikapSlice",
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
    tagTypes: ["Sikap"],
    endpoints: (builder) => ({
        getSikap: builder.query({
            query: (nisn) => ({
                url: `/sikap/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Sikap"],
        }),
        getSaran: builder.query({
            query: (nisn) => ({
                url: `/saran/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Sikap"],
        }),
        getPrestasi: builder.query({
            query: (nisn) => ({
                url: `/prestasi/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Sikap"],
        }),
        getKehadiran: builder.query({
            query: (nisn) => ({
                url: `/kehadiran/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Sikap"],
        }),
    }),
});
export const {
    useGetSikapQuery,
    useGetSaranQuery,
    useGetPrestasiQuery,
    useGetKehadiranQuery,
} = sikapSlice;
