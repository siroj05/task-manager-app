import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from '@/app/(page)/main/projects/slice/projectSlice'

const store = configureStore({
  reducer: {
    open : isOpenReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store