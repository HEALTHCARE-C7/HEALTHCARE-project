  import { configureStore } from '@reduxjs/toolkit'
  // import { apiSlice } from '../features/api/apiSlice'
  import authReducer from './reducers/DoctorLogin.js'
  import patientReducer from './reducers/PatientLogin.js'
  const store = configureStore({
    reducer: {
      doctor:authReducer,
      patient:patientReducer,
     
    },
  
  })
  export default store