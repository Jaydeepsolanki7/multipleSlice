import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import useReducer from '../features/users/UserSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
  },
})