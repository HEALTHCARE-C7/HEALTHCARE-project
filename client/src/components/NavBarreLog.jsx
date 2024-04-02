import React from 'react'
import  '../CSS/NavBarre.css'
import { useNavigate } from "react-router-dom";
import profile from '../Images/icons/user.png'
import logout from '../Images/icons/logout.png'




export default function NavBarre() {
  const navigate = useNavigate();
  return (
    <nav className=" navbar navbar-expand-lg navbar-light " >
  <div className="container">
    <div className=" col-2 col-logo"><a className="navbar-brand col-logo" >Healthcare</a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  onClick={()=>navigate('/')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate('/Home2')}>Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={()=>navigate('/contact')}>Contact us</a>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link" href="/Home2" >Service</a> */}
        {/* </li> */}
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link" href="Contact">Contact us</a> */}
        {/* </li> */}
        <li className="nav-item">
          <a className="nav-link" >Help</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Blogs</a>
        </li>
      </ul>
    </div>
   <div className='log-btn'>
   <ul className="navbar-nav">
   <li className="nav-item"  style={{paddingTop:"0.10rem"}}>
          <a className="nav-link" ><img src={logout} alt="" /></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" ><img src={profile} alt="" /></a>
        </li>
      </ul>
  
   </div>
  </div>
</nav>
  )
}
