import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {registerPatient} from '../components/AuthActionPatient.jsx'

// export const fetchPatientData = createAsyncThunk('api/patient', async () => {
//   const response = await fetch('http://localhost:5000/api/patient/signup');
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
      .addCase(registerPatient.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  
})
export default authSlice.reducer

