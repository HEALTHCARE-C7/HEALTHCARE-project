import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {registerDoctor} from '../components/AuthActionDoctor.jsx'


// export const fetchDoctorData = createAsyncThunk('api/doctor', async () => {
//   const response = await fetch('http://localhost:5000/api/doctor/signup');
//   const jsonData = await response.json();
//   return jsonData;
// });
const initialState = {
  loading: false,
  userInfo: null,
  userToken:null,
  error: null,
  success: false,
}
const authSlice = createSlice({
  name: 'auth',
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
      })
      .addCase(registerDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  
})
export default authSlice.reducer

