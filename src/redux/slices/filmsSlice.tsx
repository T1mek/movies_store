import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



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


export const getFilms = createAsyncThunk(
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
    name:'Films',
    initialState,
    reducers:{
        setFilms(state,action){
            state.films = action.payload
        },
},
    extraReducers:(builder)=>{
        builder.addCase(getFilms.pending,(state,action)=>{

            state.films=[]
        }),
            builder.addCase(getFilms.fulfilled,(state,action)=>{
                state.films=action.payload
            }),
            builder.addCase(getFilms.pending,(state,action)=>{
                state.films=[]
            })
    }
}
)


export const {setFilms} = filmsSlice.actions;
export default filmsSlice.reducer;





