import {configureStore} from "@reduxjs/toolkit";
import filmsSlice from './slices/filmsSlice'


export const store = configureStore({
    reducer:{
        filmsSlice,
    }
})