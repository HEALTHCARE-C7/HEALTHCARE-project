
import { createSlice } from '@reduxjs/toolkit'
// import {  createAsyncThunk } from '@reduxjs/toolkit';

import {patientLogin} from '../components/AuthActionPatient.jsx'
// export const fetchPatientData = createAsyncThunk('api/patient', async () => {
//   const response = await fetch('http://localhost:5000/api/patient/login');
//   const jsonData = await response.json();
//   return jsonData;
// });
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
const initialState = {
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
        });
    },
  })

  

  export default authSlice.reducer