import {configureStore} from "@reduxjs/toolkit";
import filmsSlice from './slices/filmsSlice'
import filterSlice from "./slices/fillterSlice";


 const store = configureStore({
    reducer:{
        filmsSlice,
        filterSlice

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export  default  store