import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import {registerPatient} from './AuthActionPatient.jsx'
// import { useNavigate } from "react-router-dom";
// import Securite from '../../../server/middleware/patien.middleware.js'
const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const submitForm = (data) => {
    data.email = data.email.toLowerCase()
    dispatch(registerPatient(data))
  }

    return (
    <div className="modal-content">
      <div className="signup-page">
        <h1>Sign Up Patient</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" className="form-input-signup" {...register('firstName')} required placeholder='Your First Name'/>
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" className="form-input-signup" {...register('lastName')} required placeholder='Your Last Name'/>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-input-signup" {...register('email')} required placeholder='Your Email'/>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-input-signup" {...register('password')} required placeholder='Your Password'/>
          </div>
          <div className="form-group">
            <label for="location">Location</label>
            <input type="text" className="form-input-signup" {...register('location')} required placeholder='Your Location'/>
          </div>
          <div className="form-group">
            <label for="gender">Gender</label>
            <input type="text" className="form-input-signup" {...register('gender')} required placeholder='Your Gender'/>
          </div>
          <div className="form-group">
            <label for="age">Age</label>
            <input type="number" className="form-input-signup" {...register('age')} required placeholder='Your Age'/>
          </div>
          <div className="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="tel" className="form-input-signup" {...register('phoneNumber')} required placeholder='Your Phone Number'/>
          </div>
          <button type="submit" className="button-signup" onClick={navigate('/login')}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
