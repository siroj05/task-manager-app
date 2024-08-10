import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isOpen : false
}

const isOpenSlice = createSlice({
  name : 'isOpen',
  initialState,
  reducers : {
    setIsOpen : (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    reset : (state) => {
      state.isOpen = false
    }
  }
})

export const {setIsOpen, reset} = isOpenSlice.actions
export default isOpenSlice.reducer