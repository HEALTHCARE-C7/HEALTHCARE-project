  import { configureStore } from '@reduxjs/toolkit'
  // import { apiSlice } from '../features/api/apiSlice'
  import authReducer from './reducers/DoctorLogin.js'
  import patientReducer from './reducers/PatientLogin.js'
import appoitmentSlice from './reducers/appoitmentSlice.js';
import availabilitySlice from './reducers/availabilitySlice.js';
import serviceSlice from './reducers/serviceSlice.js';
import reviewSlice from './reducers/reviewSlice.js'
import emailReducer from './reducers/emailAction.js';



  const store = configureStore({
    reducer: {
      doctor:authReducer,
      patient:patientReducer,
      appoitment : appoitmentSlice,
      availabilty : availabilitySlice,
      service:serviceSlice,
      review:reviewSlice,
      emailReducer:emailReducer,

     
    },
  
  })
  export default store