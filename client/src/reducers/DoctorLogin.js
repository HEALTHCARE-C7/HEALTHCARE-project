import axios from 'axios'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {doctorLogin} from '../components/AuthActionDoctor.jsx'


  export const fetchDoctor=createAsyncThunk('fetchDoctor',async (dispatch)=>{
  try {
    // console.log("hey");
    const  token  =localStorage.getItem('token')
    const config={headers:{Authorization:`Bearer ${token}`}}
    const response = await axios.get('http://localhost:5000/api/doctor/user',config)
    console.log('res data',response.data);
    // console.log('hes doc',response.data);
    return response.data
   
  } catch (error) {
    console.log(error);
    
  }
})

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
    return res.data
  } catch (error) {
   console.log(error);   
  } 
}) 



// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null
const initialState = {
  allDoc:[],
  DocByDep:[],
  loading: false,
  data: {},
  userInfo: null, 
  userToken:null,  
  error: null,
  success: false,
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:  (builder) => {
      builder
        .addCase(doctorLogin.pending, (state) => {
          state.loading = true;
        })
        .addCase(doctorLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.success=true
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
          state.success=true
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
        })
        .addCase(fetchDoctor.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchDoctor.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.loading = true; 
        })
        .addCase(fetchDoctor.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  })

  

  export default authSlice.reducer