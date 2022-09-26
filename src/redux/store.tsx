import {configureStore} from "@reduxjs/toolkit";
import filmsSlice from './slices/filmsSlice'
import videoSlice from "./slices/videoSlice";

 const store = configureStore({
    reducer:{
        filmsSlice,
        videoSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export  default  store