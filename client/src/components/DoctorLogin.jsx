import { useForm } from 'react-hook-form'
import  '../CSS/Auth.css'
import { useDispatch,useSelector } from 'react-redux'
import { doctorLogin } from './AuthActionDoctor'
import { useState } from 'react'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const success= useSelector((state)=>
    state.doctor.success
  )
  console.log('succes',success);
  // const success= useSelector((state)=> state.doctor.success)
  
  const submitForm = (data) => {
  dispatch(doctorLogin(data)) 
  console.log("succc",success); 
  if(success){
    navigate('/Profile/doc')
  }else{

    console.log('error');
  }
  }
   
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
      // <div id="loginModal" className="modal">
      // <div className="modal">
      <div className="modal-content">
        <div className="login-page">
          <h1>Log In Doctor</h1>
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
            <button type="submit" className="button-login" >Log In</button>
          </form>
        </div>
      </div>
    // </div>
    // </div>
    
    )
  }
  export default LoginScreen