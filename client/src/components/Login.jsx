// import { useForm } from 'react-hook-form
import Style from '../css/Auth.css'


const LoginScreen = () => {
   
  
   
  
    return (
      <form >
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
         
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
       
        />
      </div>
      <button type='submit' className='button'>
        Login
      </button>
    </form>
    )
  }
  export default LoginScreen