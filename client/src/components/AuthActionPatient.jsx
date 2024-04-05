import axios from 'axios'
// import React from "react";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerPatient = createAsyncThunk(
    'auth/register',
    async (obj, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          `http://localhost:5000/api/user/register`,
          obj,
          config
        )
      } catch (error) {
      
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          console.log(error);
          return rejectWithValue(error.message)
        }
      }
    }
  )

  export const patientLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        
        
        const { data } = await axios.post(
          `http://localhost:5000/api/user/login`,
          { email, password },
         
        )
        
        localStorage.setItem('token', data.token)
        return data.patient
      } catch (error) {
      
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          console.log(error);
          return rejectWithValue(error.message)
        }
      }
    }
  )