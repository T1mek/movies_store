import { createSlice,PayloadAction} from "@reduxjs/toolkit";


interface IFilterSlice {
	pageCount:number
}


const initialState:IFilterSlice = {
	pageCount:1



}


const filterSlice = createSlice({
		name:'filter',
		initialState,
		reducers:{

			setPageCount(state,action:PayloadAction<number>){
				state.pageCount=action.payload
			},

		},


	}
)



export const {setPageCount} = filterSlice.actions;
export default filterSlice.reducer;





