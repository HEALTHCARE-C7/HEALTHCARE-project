import { createSlice, configureStore } from '@reduxjs/toolkit'

const appoitmentSlice = createSlice({
  name: 'appoitment',
  initialState: {
    value: ["test","test2","test3","test4"]
  },

  reducers: {
    read: state => {
      console.log(state.value);
      
    },
    write: state => {
      state.value = [...state.value,"test"]
    }
  }
})

export const { read, write } = appoitmentSlice.actions

const store = configureStore({
  reducer: appoitmentSlice.reducer
})