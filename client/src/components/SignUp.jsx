import React, { useState } from 'react'
import DoctoreSignup from "./DoctoreSignup.jsx"
import PationtSignup   from './PatientSignup.jsx'
import '../CSS/Auth.css'
const SignUp = () => {
  const [view,setView]=useState('SignupP')
  const [category,setCategory]=useState(false)
  
  const switchView=(option)=>{
      setView(option)
  }
  const handlerCategory=()=>{
    setCategory(!category)
  }
  return (
    <div>
        <div className="nav-auth">
     <span className="items-login" onClick={handlerCategory}>
      Choose
     </span>
     {category && (
      <div className='menu'>
     <span className='menu-item' onClick={()=>{
      switchView('SignupD')
      handlerCategory()

      }} >
      Doctor 
     </span>
     <span className='menu-item' onClick={()=>{
      switchView('SignupP')
      handlerCategory()

      }}>
      Patient 
     </span>
     </div>
     )}
     </div>
      
    {view === "SignupD" && <DoctoreSignup/>}
    {view === "SignupP" && <PationtSignup/>}
    </div>
  )
}

export default SignUp
