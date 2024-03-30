import { createSlice, configureStore } from '@reduxjs/toolkit'

const availabiltySlice = createSlice({
  name: 'availabilty',
  initialState: {
    value: [],
    loading: null,
    error:false,
  },

  reducers: {
    read: (state) => {
      console.log(state.value[state.value.length-1]);
      
    },
    write: (state,action) => {
      console.log("action=",action.payload.value);
      state.value = [...state.value,action.payload.value]; 
    },
    startavailabilty: (state,action) => {
     state.loading = true;
    },
     succesavailabilty: (state,action) => {
       state.value = action.payload.value;
       state.loading = false;
   },
   erroravailabilty: (state,action) => { 
    state.loading=false;
    state.error=true;
  }
}
})

export const { read, write,startavailabilty,succesavailabilty,erroravailabilty } = availabiltySlice.actions

export default availabiltySlice.reducer