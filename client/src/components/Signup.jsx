import React from 'react'

const Signup = () => {
  return (
    <form >
    
    <div className='form-group'>
      <label htmlFor='firstName'>First Name</label>
      <input
        type='text'
        className='form-input'
       
       
      />
    </div>
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
    <div className='form-group'>
      <label htmlFor='email'>Confirm Password</label>
      <input
        type='password'
        className='form-input'
        
        
      />
    </div>
    <button type='submit' className='button' >
      loading 
    </button>
  </form>
  )
}

export default Signup
