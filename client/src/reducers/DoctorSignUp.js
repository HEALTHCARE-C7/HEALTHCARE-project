import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {registerDoctor} from '../components/AuthActionDoctor.jsx'
import { useDispatch } from 'react-redux';
// import { sendSignupEmail } from './redux/actions/emailActions';
import axios from "axios";


const initialState = {
  loading: false,
  userInfo: null,
  userToken:null,
  error: null,
  success: false,
};


const authSlice = createSlice({
  name: 'auth',
  // email:"",
  initialState,
  reducers: {},
  extraReducers:   (builder) => {
    builder
      .addCase(registerDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success=true

      })
      .addCase(registerDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // .addCase(sendSignupEmail.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(sendSignupEmail.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.email = action.payload;
      //   state.success=true

      // })
      // .addCase(sendSignupEmail.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
      
  },
  
  
  
})
export default authSlice.reducer

