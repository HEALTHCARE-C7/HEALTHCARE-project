
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {patientLogin} from '../components/AuthActionPatient.jsx'
import axios from 'axios'


export const fetchpatient=createAsyncThunk('fetchpatient',async (dispatch)=>{
  try {
    const  token  =localStorage.getItem('token')
    const config={headers:{Authorization:`Bearer ${token}`}}
    const response = await axios.get('http://localhost:5000/api/patient/user',config)
    // console.log("hey patien", response.data);
    // console.log('res data',response.data);
    return response.data
   
  } catch (error) {
    console.log(error);
    
  }
})


// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null
const initialState = {
  loading: false,
  userInfo: null, 
  data: null,
  error: null,
  success: false,
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:  (builder) => {
      builder
        .addCase(patientLogin.pending, (state) => {
          state.loading = true;
        })
        .addCase(patientLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.success=true;
        })
        .addCase(patientLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchpatient.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchpatient.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.success=true;
        })
        .addCase(fetchpatient.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  })

  

  export default authSlice.reducer