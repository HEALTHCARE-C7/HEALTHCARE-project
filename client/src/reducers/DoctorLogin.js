import axios from 'axios'

import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
// import {  createAsyncThunk } from '@reduxjs/toolkit';
import {doctorLogin} from '../components/AuthActionDoctor.jsx'
// export const fetchDoctorData = createAsyncThunk('api/doctor', async () => {
//   const response = await fetch('http://localhost:5000/api/doctor/login');
//   const jsonData = await response.json();
//   return jsonData;
// });

export const fetchDoc=createAsyncThunk('fetchDoc',async (dispatch)=>{
 
  try {
   const res =await axios.get("http://localhost:5000/api/doctor")   
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 
export const fetchDocByDep=createAsyncThunk('fetchDocByDep',async(dep)=>{
 
  try {
   const res =await axios.get(`http://localhost:5000/api/doctor/getDep/${dep}`)  
  //  console.log("from back",res.data); 
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 



const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
const initialState = {
  allDoc:[],
  DocByDep:[],
  loading: false,
  userInfo: null, 
  userToken, 
  error: null,
  success: false,
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:  (builder) => {
      builder
        .addCase(doctorLogin.pending, (state) => {
          state.loading = true;
        })
        .addCase(doctorLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(doctorLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchDoc.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchDoc.fulfilled, (state, action) => {
          state.loading = false;
          state.allDoc = action.payload;
          state.loading = true; 
        })
        .addCase(fetchDoc.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchDocByDep.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchDocByDep.fulfilled, (state, action) => {
          state.loading = false;
          state.DocByDep = action.payload;
          state.loading = true; 
        })
        .addCase(fetchDocByDep.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  })

  

  export default authSlice.reducer