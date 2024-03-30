  import { configureStore } from '@reduxjs/toolkit'
  // import { apiSlice } from '../features/api/apiSlice'
  import authReducer from './reducers/DoctorLogin.js'
  import patientReducer from './reducers/PatientLogin.js'
import appoitmentSlice from './reducers/appoitmentSlice.js';
import availabiltySlice from './reducers/availabilitySlice.js';


  const store = configureStore({
    reducer: {
      doctor:authReducer,
      patient:patientReducer,
      appoitment : appoitmentSlice,
      availabilty : availabiltySlice,
     
    },
  
  })
  export default store