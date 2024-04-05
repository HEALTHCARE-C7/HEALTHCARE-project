import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchAppoitments=createAsyncThunk('fetchAppoitments',async ()=>{
 
  try {
   const res =await axios.get("http://localhost:5000/api/appoitment/getAllAppoitments")
   
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 
export const addAppoitments=createAsyncThunk('addAppoitments',async (body)=>{
 
  try {
   const res = await axios.post("http://localhost:5000/api/appoitment/addAppoitment",body)  
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 
export const fetchPationOfDoctor=createAsyncThunk('fetchPationOfDoctor',async (id)=>{
 
  try {
   const res = await axios.get(`http://localhost:5000/api/appoitment/getAllAppoitmentDoctor/${id}`)  
  //  console.log(res.data);
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 
export const fetchPationOfThisDat=createAsyncThunk('fetchPationOfThisDat',async (date)=>{ 
  try {
   const res = await axios.get(`http://localhost:5000/api/appoitment/getAllDayAppoitment/${date}`)  
  
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 
export const acceptAppoitment=createAsyncThunk('acceptAppoitment',async (id)=>{ 
  try {
   const res = await axios.patch(`http://localhost:5000/api/appoitment/updateAppoitment/${id}`)  
  
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 




const appoitmentSlice = createSlice({
  name: 'appoitment',
  initialState: {
    DataAppoitment: [],
    DotorPation:[],
    toDayAppoitment:[],
    loading: null,
    error:false,
  },
extraReducers: (builder) => {
  // Add reducers for additional action types here, and handle loading state as needed
  builder.addCase(fetchAppoitments.fulfilled, (state, action) => {
    // Add user to the state array
    state.DataAppoitment = action.payload;
    state.loading = false;
    
  })
  builder.addCase(fetchAppoitments.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error; 
  })  
  builder.addCase(fetchAppoitments.pending, (state, action) => {
    state.loading = true; 
  })
















  builder.addCase(addAppoitments.fulfilled, (state, action) => {
    // Add user to the state array
    state.loading = false;
    state.DataAppoitment = action.payload;
    state.loading = true; 
  })
  builder.addCase(addAppoitments.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error; 
  })  
  builder.addCase(addAppoitments.pending, (state, action) => {
    state.loading = true; 
  }) 
  builder.addCase(fetchPationOfDoctor.fulfilled, (state, action) => {
    // Add user to the state array
    state.loading = false;
    state.DotorPation = action.payload;
    state.loading = true; 
  })
  builder.addCase(fetchPationOfDoctor.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error; 
  })  
  builder.addCase(fetchPationOfDoctor.pending, (state, action) => {
    state.loading = true; 
  }) 
  builder.addCase(fetchPationOfThisDat.fulfilled, (state, action) => {
    // Add user to the state array
    state.loading = false;
    state.toDayAppoitment = action.payload;
    state.loading = true; 
  })
  builder.addCase(fetchPationOfThisDat.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error; 
  })  
  builder.addCase(fetchPationOfThisDat.pending, (state, action) => {
    state.loading = true; 
  }) 
  builder.addCase(acceptAppoitment.fulfilled, (state, action) => {
    // Add user to the state array
    state.loading = false;
    state.DataAppoitment = action.payload;
    state.loading = true; 
  })
  builder.addCase(acceptAppoitment.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error; 
  })  
  builder.addCase(acceptAppoitment.pending, (state, action) => {
    state.loading = true; 
  }) 
      
},
})


export default appoitmentSlice.reducer