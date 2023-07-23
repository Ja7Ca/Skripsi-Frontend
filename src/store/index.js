import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/userSlice";
import { siswaSlice } from "./features/siswa/siswaSlice";
import { dashboardSlice } from "./features/dashboard/dashboardSlice";
import { nilaiSlice } from "./features/nilai/nilaiSlice";
import { kelasSlice } from "./features/kelas/kelasSlice";
import { sikapSlice } from "./features/sikap/sikapSlice";
import { eskulSlice } from "./features/eskul/eskulSlice";

const reducer = combineReducers({
    [userSlice.reducerPath]: userSlice.reducer,
    [siswaSlice.reducerPath]: siswaSlice.reducer,
    [dashboardSlice.reducerPath]: dashboardSlice.reducer,
    [nilaiSlice.reducerPath]: nilaiSlice.reducer,
    [kelasSlice.reducerPath]: kelasSlice.reducer,
    [sikapSlice.reducerPath]: sikapSlice.reducer,
    [eskulSlice.reducerPath]: eskulSlice.reducer,
});

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            [userSlice.middleware],
            [siswaSlice.middleware],
            [dashboardSlice.middleware],
            [nilaiSlice.middleware],
            [kelasSlice.middleware],
            [sikapSlice.middleware],
            [eskulSlice.middleware]
        ),
});

export default store;
