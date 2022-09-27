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
    current_page:number,
    data:IFilms[],


}


export const getFilms = createAsyncThunk<IItems>(
    'films/getFilms',
    async ()=> {
        const {data} = await axios.get<IItems>(`https://kinobd.ru/api/films`
                )
        return data

    }
)

const initialState:IItems = {
    data:[],
    current_page:1,



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
            console.log('загрука')
            state.data=[]
        },
        [getFilms.fulfilled.type]:(state,action:PayloadAction<IItems>)=>{
            state.data=action.payload.data
        },
        [getFilms.rejected.type]:(state,action:PayloadAction<IItems>)=>{
            console.log('загрука')
            state.data=[]
        },
    }
}
)



export const {setFilms} = filmsSlice.actions;
export default filmsSlice.reducer;





