import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const nilaiSlice = createApi({
    reducerPath: "nilaiSlice",
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
    tagTypes: ["Nilai"],
    endpoints: (builder) => ({
        getNilai: builder.query({
            query: (nisn) => ({
                url: `/nilai/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response.data,
            providesTags: ["Nilai"],
        }),
        editNilai: builder.mutation({
            query: (data) => ({
                url: `/nilai/${data.nisn}`,
                method: "PUT",
                headers: { Autorization: Auth.getAccessToken() },
                body: {
                    dataNilai: data.nilai,
                    dataEskul: data.eskul,
                    dataSikap: data.sikap,
                    dataSaran: data.saran,
                    dataPrestasi: data.prestasi,
                    dataKehadiran: data.kehadiran,
                },
            }),
            transformResponse: (response) => response.data,
            providesTags: ["Nilai"],
        }),
    }),
});
export const { useGetNilaiQuery, useEditNilaiMutation } = nilaiSlice;
