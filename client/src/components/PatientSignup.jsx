import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {registerPatient} from './AuthActionPatient.jsx'
// import { useNavigate } from "react-router-dom";
// import Securite from '../../../server/middleware/patien.middleware.js'
const Signup = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const submitForm = (data) => {
    data.email = data.email.toLowerCase()
    dispatch(registerPatient(data))
  }
//   function isValidEmail(email) {
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return regex.test(email);
// }
  // const clear=(req,res)=>{
  //   const {firstName,lastName,email,password,gender,location,age,phoneNumber}=req.body
  //   if(!firstName){
  //       return res.status(400).json('write your firstName')
  //   }
  //   if(!lastName){
  //       return res.status(400).json('write your lastName')
  //   }
  //   if(!email || !isValidEmail(email)){
        
  //       return res.status(400).json('Please provide a valid email address')
  //   }
  //   if(!password || password.length<8){
  //       return res.status(400).json('Password must be at least 8 characters long')
  //   }
  //   if(!location){
  //       return res.status(400).json('select your location')
  //   }
  //    if(!age){
  //       return res.status(400).json('select your age')
  //   } 
  //   if(!phoneNumber){
  //       return res.status(400).json('select your phoneNumber')
  //   }
  //   if(!gender){
  //     return res.status(400).json('select your phoneNumber')
  // }
  // else {
  //   navigate('/login')
  // }
  // }
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
          <button type="submit" className="button-signup"  >Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
