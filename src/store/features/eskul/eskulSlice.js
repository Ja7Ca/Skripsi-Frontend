import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const eskulSlice = createApi({
    reducerPath: "eskulSlice",
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
    tagTypes: ["Eskul"],
    endpoints: (builder) => ({
        getEskul: builder.query({
            query: (nisn) => ({
                url: `/eskul/${nisn}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Eskul"],
        }),
    }),
});
export const { useGetEskulQuery } = eskulSlice;
