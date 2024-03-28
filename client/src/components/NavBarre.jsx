import React from 'react'
import style from '../CSS/NavBarre.css'
export default function NavBarre() {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light " >
  <div className="container">
    <div className=" col-2 col-logo"><a className="navbar-brand col-logo" href="#">Healthcare</a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Help</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
      </ul>
    </div>
   <div className='log-btn'>
   <button type="button" className="btn btn-up">Sign Up </button>
    <button type="button" className="btn btn-in">Log In</button>
   </div>
  </div>
</nav>
  )
}
