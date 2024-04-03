import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {registerPatient} from '../components/AuthActionPatient.jsx'
import axios from 'axios'



export const fetchreview=createAsyncThunk('fetchreview',async (id)=>{
 
    try {
     const res =await axios.get(`http://localhost:5000/api/Reviews/getByDoc/${id}`)
     console.log("fetchreview",res.data);
     
      return res.data
    } catch (error) {
     console.log(error);   
    } 
  }) 


const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    DataReviews: [],

    loading: null,
    error:false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchreview.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchreview.fulfilled, (state, action) => {
        state.loading = false;
        state.DataReviews = action.payload;
      })
      .addCase(fetchreview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  
})
export default reviewSlice.reducer

