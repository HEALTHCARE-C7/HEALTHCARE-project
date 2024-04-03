import React, { useState } from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import str from '../Images/icons/star.png' 

import axios from 'axios'
import '../CSS/FileDoc.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAppoitments,fetchPationOfDoctor,fetchPationOfThisDat,acceptAppoitment } from '../reducers/appoitmentSlice.js'; 
import {sendSignupEmail} from '../reducers/email.js'
import { useNavigate } from "react-router-dom";
import { fetchAvailability,addAvailability} from '../reducers/availabilitySlice.js'
import { fetchDoctor} from '../reducers/DoctorLogin.js'
import { fetchreview} from '../reducers/reviewSlice.js'
import doc1 from '../Images/doc1.jpeg';
import search from '../Images/icons/search.png'
import bell from '../Images/icons/bell.png'


export default function ProfileDoc(props) {
  const dispatch=useDispatch()
  const navigate = useNavigate();


  const { DataAppoitment } =useSelector (state => state.appoitment)
  const { DotorPation } =useSelector (state => state.appoitment)
  const { toDayAppoitment } =useSelector (state => state.appoitment)
  const { dataAvalability } =useSelector (state => state.availabilty)
  const { DataReviews } =useSelector (state => state.review)
  const { data } =useSelector (state => state.doctor)
  // console.log("this is the data user in doc profile",data);

  const [isFetch,setIsFetch]=useState(false)
  const [view,setView]=useState('Overview')
  const [view1,setView1]=useState('Overview')
  const [body,setBody]=useState({})


  const [user, setUser] = useState();
  
  let date = new Date()
  let day = date.getDate()  
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let today = year + '-' + month + '-' + day


 
  
  useEffect(() => {
    dispatch( fetchDoctor())
    dispatch(fetchAppoitments())
    dispatch(fetchPationOfDoctor(data?.id))
    dispatch(fetchPationOfThisDat(today))
    dispatch(fetchAvailability())   
    dispatch(fetchreview())  
    dispatch(sendSignupEmail(data.email))
    // setUser(user)


  }, [])






  const changeView =(view)=>{
    setView(view)
    console.log(view);
  
  }
  

const toogle=()=>{
    setIsFetch(!isFetch)  
  }

const rendreView =(view1)=>{
  setView1(view1)
  console.log("view1", view1);

}


  return (
    <>
    
  <div className="container-fluid">
        <div className="row">
            <div className="col-2 " style={{paddingTop:"7rem"}} >
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "20rem",height:"57rem"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">     
            <span className="fs-4">Doct.</span>
        </a>
        <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
            
                <a href="#" className="nav-link active" aria-current="page" onClick={()=>{
                  rendreView('Overview')  
                }} >        
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">         
                  Appoitment
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">         
                  My Pateints
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">
                
                  Schedule Timings
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark"  onClick={()=>{
                  rendreView('Review')  
                }}  >
                           
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">          
                Message

                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">          
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark" onClick={()=>{
                  rendreView('MyProfile')  
                }}>          
                  My Profile
                </a>
              </li>
            </ul>
            <hr/>

      </div>
          
            </div>

            {view1 === "Overview" &&            
              <>

            <div className="col-10" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"7rem"}}>
         
                <div className="row">
                  <div className="col-12" style={{paddingBottom:"3rem"}}>
                    <h3>Welcome , Dr {data?.firstName} </h3>
                    <h6>Have a nice day at work</h6>
                  </div>
                  <div className="col-3" >
                    <div className="card w-75-file-doc mb-3" style={{backgroundColor:"#7a6efe"}}>
                        <div className="card-body">
                          <h5 className="card-title">24.4K</h5>
                          <p className="card-text">Appointment</p>
                        </div>
                      </div>
                  </div>
                  <div className="col-3">
                    <div className="card w-75-file-doc mb-3"  style={{backgroundColor:"#ff5363"}} >
                        <div className="card-body">
                          <h5 className="card-title">166.35K</h5>
                          <p className="card-text">Total Patient</p>
                        </div>
                      </div>
                  </div>
                  <div className="col-3">
                    <div className="card w-75-file-doc mb-3"  style={{backgroundColor:"#ffa901"}} >
                        <div className="card-body">
                          <h5 className="card-title">53.5K</h5>
                          <p className="card-text">Clinic Consulting</p>
                        </div>
                      </div>
                  </div>
                  <div className="col-3">
                    <div className="card w-75-file-doc mb-3"  style={{backgroundColor:"#24a8fa"}}>
                        <div className="card-body">
                          <h5 className="card-title">28.0K</h5>
                          <p className="card-text">Video Consulting.</p>
                        </div>
                      </div>
                  </div>
              
              
                

                </div>


                  <div className="row" style={{paddingTop:"2rem",paddingBottom:"2rem"}}>
                    <div className="col-5" >
                      <div className="title">
                        <h5>Appoitment Request</h5>
                      </div>
                      {
                        DataAppoitment.map((e,i)=>{
                          return(               
                              <ul className="list-group"  key={i}>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                  <div className="col-1">
                                    <img  style={{width:"100%",height:"100",borderRadius:"50rem"}} src={doc1} alt="" />
                                  </div>
                                  <div className="col-7">
                                    <div>
                                      {e.patientName}
                                    </div>
                                  <span>{e.date}</span>
                                  </div>
                                  <div className="col-2">
                                  <button className='btn btn-learn'onClick={()=>{
                                  dispatch(addAvailability({
                                    date:e.date,
                                    time:e.time,
                                    patientName:e.patientName,
                                  }))
                                  dispatch(acceptAppoitment(e.id))
                                  toogle()
                                  
                                

                                  }} >{e.accepted}</button>

                                  </div>
                                  </li>
                                </ul>
                          )
                        })
                      }
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                    <div className="title">
                        <h5>Appoitments Of To day</h5>
                    </div>
                      {
                        toDayAppoitment.map((data,i)=>{   
                          return(               
                            <ul className="list-group" key={i}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="col-1">
                              <img  style={{width:"100%",height:"100",borderRadius:"50rem"}} src={doc1} alt="" />
                            </div>
                            <div className="col-6" >
                            {data.patientName}
                            </div>
                            <div className="col-3" style={{display:"flex",gap:"1rem" }}>
                              <div>{data.time}</div>
                            <span>{data.date}</span>


                            </div>
                            </li>
                          </ul>
                          )
                        })  
                      }
                    </div>
                  </div>
        

                      <div className="container-fluid">
                        
                      <div className="title">
                            <h5>Recent Patient</h5>
                          </div>
                    <div className="row" style={{backgroundColor:"#bebebe",height:"2rem"}}>
                            
                        <div className="col-2">test</div>
                        <div className="col-2">Visit Id </div>
                        <div className="col-2">Date</div>
                        <div className="col-2">Gender</div>
                        <div className="col-2">Departement</div>
                        <div className="col-2">Statues</div>   
                    </div>
                    {
                      DotorPation.map((data)=>{
                        return(
                          <div className="row" key={data.id} style={{paddingTop:"2rem",paddingBottom:"2rem",backgroundColor:"white"}}>
                          <div className="col-2">{data.patientName}</div>
                          <div className="col-2">{data.id}</div>
                          <div className="col-2">{data.date}</div>
                          <div className="col-2">{data.patientEmail}</div>
                          <div className="col-2">{data.departement}</div>
                          <div className="col-2">{data.accepted}</div>
                        </div>
                        )

                      })
                    }
                    
                    
                      </div>



            </div>
            </>
            }
            {view1 === "MyProfile" && 
                <div className="col-10" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0rem"}}>            
                    <div className="row">
                          <div className="col-12" style={{paddingBottom:"3rem"}}>
                            <h3>My Profile </h3>              
                          </div>
                      </div>
                          <div className="row" style={{gap:"1rem"}}>
                            <div className="col-2" style={{paddingBottom:"2rem", paddingTop:"5rem"}}>
                              <div className="card" style={{width:"18rem"}}>
                                  <img src={doc1} style={{borderRadius:"50rem",width:"150px",height:"150px",marginLeft:"4rem",marginTop:"1rem"}} className="card-img-top" alt="..."/>
                                  <div className="card-body" style={{textAlign:"center"}}>
                                    <div>
                                    <h5 className="card-title" style={{color:"black"}}>{data?.firstName}</h5>
                                    <p>{data?.speciality}</p>
                                    </div>
                                        <button  onClick={()=>{
                                          changeView('edit')  
                                        }}className='btn btn1-slide2' style={{borderRadius:"0rem",backgroundColor:"#7a6efe"}}>Edite Profile</button>  
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
                            <div className="col-8" style={{paddingLeft:"7rem"}}>
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
            
            
            
           
                          {view === "edit" && 

                            <div className="row"  style={{padding:"16px",width:"700px",height:"380px",marginTop:"1.7rem" , backgroundColor:"white"}}>
                            <div className="col-6">
                              <h5  className='text2'>name:</h5>
                                </div> 
                            <div className="col-6" style={{padding:"10px",}}>
                            <input className="form-control me-2" style={{borderRadius:"2rem",backgroundColor:"transparent"}} type="search" placeholder="name" aria-label="Search"/>
            
            
                              </div>
                              <div className="col-6">
                              <h5  className='text2'>last Name:</h5>
                                </div> 
                                <div className="col-6" style={{padding:"10px",}}>
                                <input className="form-control me-2" style={{borderRadius:"2rem",backgroundColor:"transparent"}} type="search" placeholder="last Name" aria-label="Search"/>
            
                              </div>
                              <div className="col-6">
                              <h5  className='text2'>email:</h5>
                                </div> 
                                <div className="col-6" style={{padding:"10px",}}>
                                <input className="form-control me-2" style={{borderRadius:"2rem",backgroundColor:"transparent"}} type="search" placeholder="email" aria-label="Search"/>
            
                              </div>
                              <div className="col-6">
                              <h5  className='text2'>speciality:</h5>
                                </div> 
                                <div className="col-6" style={{padding:"10px",}}>
                                <input className="form-control me-2" style={{borderRadius:"2rem",backgroundColor:"transparent"}} type="search" placeholder="speciality" aria-label="Search"/>
            
                              </div>
            
            
            
            
                        </div> }
            
                            
            
                            </div>
                 </div>
            
            
                    
                      
            
            
            
                </div>
            
            }
            {view1 ==="Review" &&   
             <div className="col-10" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"4.5rem"}}>            
                  
                    <div className="row"style={{paddingTop:"1rem"}}>
                                    <div className="col-12" >
                                    <h5>Reviews</h5>              
                                  </div>
                    
                    
                    
                              <div className="carousel">
                                <div className="card-container">
                                    {DataReviews.map((data,i)=>{
                                      return(
                    
                                        <MDBCol md="12" lg="10" xl="8" key={i} style={{paddingBottom:"1rem"}}>
                                <MDBCard>
                                  <MDBCardBody>
                                    <div className="d-flex flex-start align-items-center">
                                      <MDBCardImage
                                        className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                                        alt="avatar"
                                        width="60"
                                        height="60"
                                      />
                                      <div>
                                        <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                                        <p className="text-muted small mb-0">
                                          Shared publicly - Jan 2020
                                        </p>
                                      </div>
                                    </div>
                    
                                    <p className="mt-3 mb-4 pb-2">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                      laboris nisi ut aliquip consequat.
                                    </p>
                    
                                    <div className="small d-flex justify-content-start">
                                      <a href="#!" className="d-flex align-items-center me-3">
                                        <MDBIcon far icon="thumbs-up me-2" />
                                        <p className="mb-0">Like</p>
                                      </a>
                                      <a href="#!" className="d-flex align-items-center me-3">
                                        <MDBIcon far icon="comment-dots me-2" />
                                        <p className="mb-0">Comment</p>
                                      </a>
                                      <a href="#!" className="d-flex align-items-center me-3">
                                        <MDBIcon fas icon="share me-2" />
                                        <p className="mb-0">Share</p>
                                      </a>
                                    </div>
                                  </MDBCardBody>
                                </MDBCard>
                                        </MDBCol>
                                      )
                                      
                                    })}
                                </div>
                              </div>
                              
                    
                                    </div>
            </div>
                            
                            
                            }



        </div>
  </div>

 


    </>
  )
}
