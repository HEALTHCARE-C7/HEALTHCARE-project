
import { createSlice } from '@reduxjs/toolkit'
// import {  createAsyncThunk } from '@reduxjs/toolkit';
import {doctorLogin} from '../components/AuthActionDoctor.jsx'
// export const fetchDoctorData = createAsyncThunk('api/doctor', async () => {
//   const response = await fetch('http://localhost:5000/api/doctor/login');
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
        });
    },
  })

  

  export default authSlice.reducer