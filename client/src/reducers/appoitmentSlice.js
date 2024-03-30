import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchAppoitments=createAsyncThunk('fetchAppoitments',async (dispatch)=>{
  // startAppoitment()
  try {
   const res =await axios.get("http://localhost:5000/api/appoitment/getAllAppoitments")
   console.log(res.data);   
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 
const appoitmentSlice = createSlice({
  name: 'appoitment',
  initialState: {
    value: [],
    loading: null,
    error:false,
  },
extraReducers: (builder) => {
  // Add reducers for additional action types here, and handle loading state as needed
  builder.addCase(fetchAppoitments.fulfilled, (state, action) => {
    // Add user to the state array
    state.loading = false;
    state.value = action.payload;
    state.loading = true; 
  })
  builder.addCase(fetchAppoitments.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error; 
  })  
  builder.addCase(fetchAppoitments.pending, (state, action) => {
    state.loading = true; 
  })  
},
})


export default appoitmentSlice.reducer