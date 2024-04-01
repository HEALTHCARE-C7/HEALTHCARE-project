import { useForm } from 'react-hook-form'
import  '../CSS/Auth.css'
import { useDispatch, useSelector } from 'react-redux'
import { patientLogin } from './AuthActionPatient.jsx'
import { useState } from 'react'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  // const { loading, error } = useSelector((state) => state.user)
  const success= useSelector((state)=>
    state.patient.success
  )
  const submitForm = (data) => {
    dispatch(patientLogin(data))
    console.log("succc",success); 
  if(success){
    navigate('/Profile/Patient')
  }else{

    console.log('error');
  }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
    return (
        <div className="modal-content">
        <div className="login-page">
          <h1>Log In Patient</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-group-login">
              <label className="email" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-input-login"
                {...register('email')}
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group-login">
              <label className="password" htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                className="form-input-login"
                {...register('password')}
                required
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                
              />
               <button className="password-toggle" onClick={togglePasswordVisibility}>
             {showPassword ? <FaEyeSlash /> :  <FaEye />}
             </button>
             </div>
             
            </div>
            <button type="submit" className="button-login">Log In</button>
          </form>
        </div>
      </div>
    )
  }
  export default LoginScreen