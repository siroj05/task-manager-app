import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from '@/app/(page)/main/projects/slice/projectSlice'
import dropdownReducer from '@/components/dropdown/slice/dropdownSlice'

const store = configureStore({
  reducer: {
    open : isOpenReducer,
    dropdown : dropdownReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store