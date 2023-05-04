import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const siswaSlice = createApi({
    reducerPath: "siswaSlice",
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
    tagTypes: ["Siswa"],
    endpoints: (builder) => ({
        getSiswa: builder.query({
            query: () => ({
                url: "siswa",
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
        cekNisn: builder.query({
            query: (nisn) => ({
                url: `cek-nisn/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
        cekNis: builder.query({
            query: (nis) => ({
                url: `cek-nis/${nis}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
        addSiswa: builder.mutation({
            query: (data) => ({
                url: `siswa/tambah`,
                method: "POST",
                headers: { Autorization: Auth.getAccessToken() },
                body: data,
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
        getOneSiswa: builder.query({
            query: (nisn) => ({
                url: `siswa/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
        deleteSiswa: builder.mutation({
            query: (nisn) => ({
                url: `siswa/${nisn}`,
                method: "DELETE",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
        guruEditSiswa: builder.mutation({
            query: (data) => ({
                url: `edit-siswa`,
                method: "PUT",
                headers: { Autorization: Auth.getAccessToken() },
                body: data,
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Siswa"],
        }),
    }),
});
export const {
    useGetSiswaQuery,
    useLazyCekNisnQuery,
    useLazyCekNisQuery,
    useAddSiswaMutation,
    useGetOneSiswaQuery,
    useDeleteSiswaMutation,
    useGuruEditSiswaMutation,
} = siswaSlice;
