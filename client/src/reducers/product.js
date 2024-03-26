import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    loading: false,
    error: null
  }

  export const getProducts=createAsyncThunk("getProduct",async()=>{
    try {
       const data= await axios.get("") 
       return data.data
    } catch (error) {
        throw error
    }
  })


  export const getSlice=createSlice({
    name :"productslice",
    initialState,
    reducers:{},
    extraReducers:{
        
    }
  })