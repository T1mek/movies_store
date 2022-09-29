import { createSlice,createAsyncThunk,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";



type genres = {
    id:number,
    name_ru:string
}
type person = {
    id:number,
    name_russian:string,

}


export type IFilms = {
    age_restriction: string,
    big_poster: string,
    small_poster:string,
    budget: string,
    name_russian: string,
    country_ru: string,
    genres: genres[],
    rating: string[],
    name_original: string,
    persons:person[],
    year:number,
    description:string,
    webUrl:string,
    trailer:string,
    id:number,
    player:string
}


export type IItems = {
    status: 'loading' | 'successful' | 'error',
    data:IFilms[],


}


export const getFilms = createAsyncThunk<IItems,number>(
    'films/getFilms',
    async (pageCount)=> {


        const {data} = await axios.get<IItems>(`https://kinobd.ru/api/films?page=${pageCount}`)
        return data

    }
)

const initialState:IItems = {
    data:[],
    status:'loading'




}


const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers:{
        setFilms(state,action:PayloadAction<IItems>){
            state.data = action.payload.data
        },

},
    extraReducers:{
        [getFilms.pending.type]:(state,action:PayloadAction<IItems>)=>{
            state.status= 'loading'
            state.data=[]
        },
        [getFilms.fulfilled.type]:(state,action:PayloadAction<IItems>)=>{
            state.status='successful'
            state.data=action.payload.data
        },
        [getFilms.rejected.type]:(state,action:PayloadAction<IItems>)=>{
            state.status='error'
            state.data=[]
        },
    }
}
)



export const {setFilms} = filmsSlice.actions;
export default filmsSlice.reducer;





