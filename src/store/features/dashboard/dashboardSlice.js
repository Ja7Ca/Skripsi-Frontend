import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const dashboardSlice = createApi({
    reducerPath: "dashboardSlice",
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
    tagTypes: ["Dashboard"],
    endpoints: (builder) => ({
        getDashboard: builder.query({
            query: () => ({
                url: "dashboard",
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Dashboard"],
        }),
    }),
});
export const { useGetDashboardQuery } = dashboardSlice;
