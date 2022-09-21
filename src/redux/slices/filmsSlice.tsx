import { createSlice,createAsyncThunk,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";


export type IFilms = {
    filmId: number,
    nameRu: string,
    nameEu: string,
    year: string,
    filmLength: string,
    countries: string[],
    genres: string[],
    rating: string[],
    posterUrl: string,
    posterUrlPreview: string,
}


export type IItems = {
    pagesCount:number,
    films:IFilms[],

}


export const getFilms = createAsyncThunk<IItems>(
    'films/getFilms',
    async ()=> {
        const {data} = await axios.get<IItems>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,{
            headers: {
                'X-API-KEY': '26604d89-ae5c-49f8-b044-44ae69bde220',
                'Content-Type': 'application/json',
            }
                })
        return data

    }
)

const initialState:IItems = {
    films:[],
    pagesCount:1,


}


const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers:{
        setFilms(state,action:PayloadAction<IFilms[]>){
            state.films = action.payload
        },
},
    extraReducers:{
        [getFilms.pending.type]:(state,action:PayloadAction<IFilms[]>)=>{
            console.log('загрука')
            state.films=[]
        },
        [getFilms.fulfilled.type]:(state,action:PayloadAction<IFilms[]>)=>{
            console.log('загрука')
            state.films=action.payload
        },
        [getFilms.rejected.type]:(state,action:PayloadAction<IFilms[]>)=>{
            console.log('загрука')
            state.films=[]
        },
    }
}
)

export const filmsAll = (state: RootState) => state.filmsSlice;

export const {setFilms} = filmsSlice.actions;
export default filmsSlice.reducer;




