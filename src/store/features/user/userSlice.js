import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const userSlice = createApi({
    reducerPath: "userSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: CONST.BASE_URL,
        prepareHeaders: (headers) => {
            const token = Auth.getAccessToken();

            if (token) {
                headers.set("Authorization", `${token}`);
                // headers.set("Access-Control-Allow-Origin", "*");
                // headers.set(
                //     "Access-Control-Allow-Methods",
                //     "GET, POST, PUT, DELETE, OPTIONS"
                // );
                // headers.set("Access-Control-Allow-Credentials", "true");
            }

            return headers;
        },
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: "login",
                method: "POST",
                body: { username, password },
            }),
            transformResponse(response) {
                Auth.storeUserInfoToCookie(response.data);
                return response;
            },
            providesTags: ["Auth"],
        }),
        register: builder.mutation({
            query: ({ fullname, alamat, username, password }) => ({
                url: "register",
                method: "POST",
                body: { fullname, alamat, username, password },
            }),
            invalidatesTags: ["Auth"],
        }),
        whoami: builder.query({
            query: () => ({
                url: "/whoami",
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        forgot: builder.mutation({
            query: (data) => ({
                url: "/forgot",
                method: "POST",
                body: data,
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        changeForgotPass: builder.mutation({
            query: (data) => ({
                url: "/changeforgotpass",
                method: "PUT",
                body: data,
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        getUserKey: builder.query({
            query: (key) => ({
                url: `/getuserkey/${key}`,
                method: "GET",
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: "/updateuser",
                method: "PUT",
                body: data,
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        getAllUser: builder.query({
            query: () => ({
                url: `/user`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        getOneUser: builder.query({
            query: (id) => ({
                url: `/user/${id}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        addUser: builder.mutation({
            query: (data) => ({
                url: "/user",
                method: "POST",
                body: data,
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        cekUsername: builder.query({
            query: (username) => ({
                url: `/cek-user/${username}`,
                method: "GET",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse: (response) => response,
            providesTags: ["Auth"],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `user/${id}`,
                method: "DELETE",
                headers: { Autorization: Auth.getAccessToken() },
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Auth"],
        }),
        updatePassUser: builder.mutation({
            query: (data) => ({
                url: `user/updatePass`,
                method: "POST",
                headers: { Autorization: Auth.getAccessToken() },
                body: data,
            }),
            transformResponse(response) {
                return response.data;
            },
            providesTags: ["Auth"],
        }),
    }),
});
export const {
    useLoginMutation,
    useRegisterMutation,
    useWhoamiQuery,
    useForgotMutation,
    useChangeForgotPassMutation,
    useGetUserKeyQuery,
    useUpdateUserMutation,
    useGetAllUserQuery,
    useGetOneUserQuery,
    useAddUserMutation,
    useLazyCekUsernameQuery,
    useDeleteUserMutation,
    useUpdatePassUserMutation,
} = userSlice;
