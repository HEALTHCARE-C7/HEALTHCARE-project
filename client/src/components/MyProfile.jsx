import React from 'react'
import  { useState } from 'react'
import search from '../Images/icons/search.png'
import doc1 from '../Images/doc1.jpeg';
import str from '../Images/icons/star.png' 
import ProfilePatione from './ProfilePatione';



export default function MyProfile() {
  const [view,setView]=useState('Overview')
  const changeView =(view)=>{
    setView(view)
    console.log(view);
  
  }
  return (
    <div className="col-10" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}>
                <nav className="navbar">
                <div className="container-fluid">
                    <form className="d-flex serach-input-file-Doc">
                    <input className="form-control me-2" style={{borderRadius:"2rem",backgroundColor:"transparent"}} type="search" placeholder="Search" aria-label="Search"/>
                    <img style={{ width: "20px",height:"30px",paddingTop:"6px"}} src={search} alt="" />

                  
                    </form> 
                     <div>
                    <div className="dropdown">
              <a href="#" onClick={()=>{
                  changeView('MyProfile');  
                }} className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
                    </div>
                </div>

                 </nav>

            <div className="row">
              <div className="col-12" style={{paddingBottom:"3rem"}}>
                <h3>My Profile </h3>              
              </div>
              </div>
              <div className="row" style={{gap:"1rem"}}>
                <div className="col-2" style={{paddingBottom:"2rem"}}>
                  <div className="card" style={{width:"18rem"}}>
                      <img src={doc1} style={{borderRadius:"50rem",width:"150px",height:"150px",marginLeft:"4rem",marginTop:"1rem"}} className="card-img-top" alt="..."/>
                      <div className="card-body" style={{textAlign:"center"}}>
                        <div>
                        <h5 className="card-title" style={{color:"black"}}>name</h5>
                        <p>specialité</p>
                        </div>
                            <button className='btn btn1-slide2' style={{borderRadius:"0rem",backgroundColor:"#7a6efe"}}>Edite Profile</button>  
                            <p>146 Rates</p>
                            <div className='img-card-star' style={{textAlign:"center",paddingLeft:"4.2rem"}} >
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                    </div>
                      </div>
                    </div>
                  </div>     



                <div className="col-8">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">My Profile</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Change Password</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Notification</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                </nav>
              



                

                </div>
            </div>



            </div>
  
  )
}
