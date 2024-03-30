import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchAvailability=createAsyncThunk('fetchAvailability',async (dispatch)=>{

  try {
   const res =await axios.get("http://localhost:5000/api/availability/getAllAvailability")
     
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 

const availabilitySlice = createSlice({
  name: 'availability',
  initialState: {
    dataAvalability: [],
    loading: null,
    error:false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAvailability.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.dataAvalability = action.payload;
      state.loading = true; 
    })
    builder.addCase(fetchAvailability.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error; 
    })  
    builder.addCase(fetchAvailability.pending, (state, action) => {
      state.loading = true; 
    })
  },

})



export default availabilitySlice.reducer