
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  loading: false,
  userInfo: {}, 
  userToken: null, 
  error: null,
  success: false,
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers:  (builder) => {
    //   builder
    //     .addCase(fetchUserData.pending, (state) => {
    //       state.loading = true;
    //     })
    //     .addCase(fetchUserData.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.data = action.payload;
    //     })
    //     .addCase(fetchUserData.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     });
    // },
  })

  

  export default authSlice.reducer