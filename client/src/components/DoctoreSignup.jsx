// import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {registerDoctor} from './AuthActionDoctor.jsx'
import '../CSS/Signup.css'
import { useNavigate } from "react-router-dom";
import { sendSignupEmail } from '../reducers/email.js';

const Signup = () => {
  // const navigate = useNavigate();
 
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  
  const submitForm = (data) => {
   
    data.email = data.email.toLowerCase()
   const doctor= dispatch(registerDoctor(data))
    console.log(doctor);
    dispatch(sendSignupEmail(data.email))
  }
 

  return (
    // <div id="signupModal" className="modal">
    <div className="modal-content">
      <div className="signup-page">
        <h1>Sign Up Doctor</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label for="firstName">First Name</label><br />
            <input type="text" className="form-input-signup" {...register('firstName')} required placeholder='Your First Name'/>
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label><br/>
            <input type="text" className="form-input-signup" {...register('lastName')} required placeholder='Your Last Name'/>
          </div>
          <div className="form-group">
            <label for="email">Email</label><br/>
            <input type="email" className="form-input-signup" {...register('email')} required placeholder='Your Email'/>
          </div>
          <div className="form-group">
            <label for="password">Password</label><br/>
            <input type="password" className="form-input-signup" {...register('password')} required placeholder='Your Password'/>
          </div>
          <div className="form-group">
            <label for="location">Location</label><br/>
            <input type="text" className="form-input-signup" {...register('location')} required placeholder='Your Location'/>
          </div>
          <div className="form-group">
            <label for="gender">Gender</label><br/>
            <input type="text" className="form-input-signup" {...register('gender')} required placeholder='Your Gender'/>
          </div>
          <div className="form-group">
            <label for="age">Age</label><br/>
            <input type="number" className="form-input-signup" {...register('age')} required placeholder='Your Age'/>
          </div>
          <div className="form-group">
            <label for="phoneNumber">Phone Number</label><br/>
            <input type="tel" className="form-input-signup" {...register('phoneNumber')} required placeholder='Your Phone Number'/>
          </div>
          <div className="form-group">
            <label for="speciality">Speciality</label><br/>
            <input type="text" className="form-input-signup" {...register('speciality')} required placeholder='Your Speciality'/>
          </div>
          <button type="submit" className="button-signup"  >Sign Up</button>
        </form>
      </div>
     
    </div>
  // </div>
  
  )
}

export default Signup
