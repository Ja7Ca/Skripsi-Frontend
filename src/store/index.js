import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/userSlice";
import { siswaSlice } from "./features/siswa/siswaSlice";
import { dashboardSlice } from "./features/dashboard/dashboardSlice";
import { nilaiSlice } from "./features/nilai/nilaiSlice";

const reducer = combineReducers({
    [userSlice.reducerPath]: userSlice.reducer,
    [siswaSlice.reducerPath]: siswaSlice.reducer,
    [dashboardSlice.reducerPath]: dashboardSlice.reducer,
    [nilaiSlice.reducerPath]: nilaiSlice.reducer,
});

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            [userSlice.middleware],
            [siswaSlice.middleware],
            [dashboardSlice.middleware],
            [nilaiSlice.middleware]
        ),
});

export default store;
