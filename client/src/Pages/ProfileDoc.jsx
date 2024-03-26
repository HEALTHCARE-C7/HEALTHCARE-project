import React from 'react'
import Style from '../CSS/Profile.css'
import 'bootstrap';

export default function ProfileDoc() {

  return ( 
      
   
    <div className='body' >
      <div className='sideBar'>
      {/* <a className="active" href="#home">My Profil</a> */}
      {/* <a href="#about">Change Password</a>
      <a href="#contact">Notification</a>
      <a href="#contact">reviews</a> */}
      </div>
        <input className='search-input'  type="text" name="search"  placeholder="Search.." />
        {/* <button type="submit"><i className="fa fa-search"></i></button> */}

    <div className="topnav">
      <a className="active" href="#home">My Profil</a>
      <a href="#about">Change Password</a>
      <a href="#contact">Notification</a>
      <a href="#contact">reviews</a>
  


     
     
      </div>

      </div>
    

   
  )
}
