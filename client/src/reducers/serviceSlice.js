import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchService=createAsyncThunk('fetchService',async (dispatch)=>{
 
    try {
     const res =await axios.get("http://localhost:5000/api/services")
     
      return res.data
    } catch (error) {
     console.log(error);   
    } 
  }) 


const serviceSlice = createSlice({
    name: 'service',
    initialState: { 
      serviceData:[],
      loading: null,
      error:false,
    },
  extraReducers: (builder) => {
    builder.addCase(fetchService.fulfilled, (state, action) => {
        // Add user to the state array
        state.loading = false;
        state.serviceData = action.payload;
        state.loading = true; 
      })
      builder.addCase(fetchService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error; 
      })  
      builder.addCase(fetchService.pending, (state, action) => {
        state.loading = true; 
      })
    },
})
export default serviceSlice.reducer