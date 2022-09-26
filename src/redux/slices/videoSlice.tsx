import { createSlice,createAsyncThunk,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";


type iVideo = {
	url:string,
	name:string,
	site:string
}
export type IVideos={
	items:iVideo[],
	total:number
}


export const getVideo = createAsyncThunk<IVideos>(
	'films/getVideo',
	async ()=> {
		const {data} = await axios.get<IVideos>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/videos`,{
			headers: {
				'X-API-KEY': '26604d89-ae5c-49f8-b044-44ae69bde220',
				'Content-Type': 'application/json',
			}
		})
		return data

	}
)

const initialState:IVideos = {
	items:[],
	total:1,



}


const videoSlice = createSlice({
		name:'video',
		initialState,
		reducers:{
			setFilms(state,action:PayloadAction<IVideos>){
				state.items = action.payload.items
			},

		},
		extraReducers:{
			[getVideo.pending.type]:(state,action:PayloadAction<IVideos>)=>{
				console.log('загрука')
				state.items=[]
			},
			[getVideo.fulfilled.type]:(state,action:PayloadAction<IVideos>)=>{
		console.log(action.payload.items)
				state.items=action.payload.items
			},
			[getVideo.rejected.type]:(state,action:PayloadAction<IVideos>)=>{
				console.log('загрука')
				state.items=[]
			},
		}
	}
)



export const {setFilms} = videoSlice.actions;
export default videoSlice.reducer;


