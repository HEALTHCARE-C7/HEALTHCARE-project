import React, { useState } from 'react'
import DoctorLogin from './DoctorLogin.jsx'
import PatientLogin from './PatientLogin.jsx'
import '../CSS/Auth.css'
import NavBarre from '../components/NavBarre.jsx'


const LoginPage = ({changeView}) => {
const [view,setView]=useState('loginP')
const [category,setCategory]=useState(false)

const switchView=(option)=>{
    setView(option)
}
const handlerCategory=()=>{
  setCategory(!category)
}
return (
  <div>

   
    <div className="nav nav-auth">
     <span className="items-login" onClick={handlerCategory}>
      Choose
     </span>
     {category && (
      <div className='menu'>
     <span className='menu-item' onClick={()=>{
      switchView('loginD')
      handlerCategory()
      }} >
      Doctor 
     </span>
     <span className='menu-item' onClick={()=>{
      switchView('loginP')
      handlerCategory()
      }}>
      Patient 
     </span>
     </div>
     )}
     </div>
     
      
    { view==="loginD" &&  <DoctorLogin changeView={changeView}/>}
      {view==="loginP"&&<PatientLogin changeView={changeView} />} 

    </div>
  )
}

export default LoginPage
