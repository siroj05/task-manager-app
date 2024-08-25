import store from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dropdownValue {
  status : string
  priority : string
}

const initialState : dropdownValue = {
  status : '',
  priority : ''
}

const dropdownSlice = createSlice({
  name : 'dropdown',
  initialState,
  reducers : {
    selectStatus : (state, action:PayloadAction<string>) => {
      state.status = action.payload
    },
    selectPriority : (state, action:PayloadAction<string>) => {
      state.priority = action.payload
    },
    reset : (state) => {
      state.status = initialState.status
      state.priority = initialState.priority
    }
  }
})

export const { selectPriority, selectStatus, reset } = dropdownSlice.actions
export default dropdownSlice.reducer