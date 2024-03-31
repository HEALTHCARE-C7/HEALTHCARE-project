  import { configureStore } from '@reduxjs/toolkit'
  // import { apiSlice } from '../features/api/apiSlice'
  import authReducer from './reducers/DoctorLogin.js'
  import patientReducer from './reducers/PatientLogin.js'
import appoitmentSlice from './reducers/appoitmentSlice.js';
import availabilitySlice from './reducers/availabilitySlice.js';
import serviceSlice from './reducers/serviceSlice.js';




  const store = configureStore({
    reducer: {
      doctor:authReducer,
      patient:patientReducer,
      appoitment : appoitmentSlice,
      availabilty : availabilitySlice,
      service:serviceSlice
     
    },
  
  })
  export default store