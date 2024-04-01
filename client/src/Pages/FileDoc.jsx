import React, { useState } from 'react'
import '../CSS/FileDoc.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAppoitments,fetchPationOfDoctor,fetchPationOfThisDat,acceptAppoitment } from '../reducers/appoitmentSlice.js'; 
import { fetchAvailability,addAvailability} from '../reducers/availabilitySlice.js'
import doc1 from '../Images/doc1.jpeg';


import search from '../Images/icons/search.png'
import bell from '../Images/icons/bell.png'

import MyProfile from '../components/MyProfile.jsx';

export default function FileDoc() {

  const { DataAppoitment } =useSelector (state => state.appoitment)
  const { DotorPation } =useSelector (state => state.appoitment)
  const { toDayAppoitment } =useSelector (state => state.appoitment)
  const { dataAvalability } =useSelector (state => state.availabilty)
  const [isFetch,setIsFetch]=useState(false)
  const [view,setView]=useState('Overview')

  
  
  let date = new Date()
  let day = date.getDate()  
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let today = year + '-' + month + '-' + day




  const dispatch=useDispatch()

    useEffect(() => {
    dispatch(fetchAppoitments())
    dispatch(fetchPationOfDoctor(1))
    dispatch(fetchPationOfThisDat(today))
    dispatch(fetchAvailability())   
  }, [isFetch])


  const toogle=()=>{
    setIsFetch(!isFetch)  
  }

const changeView =(view)=>{
  setView(view)
  console.log(view);

}


  return (
    <>
  {/* {console.log("avalability",dataAvalability)} */}
  <div className="container-fluid">
    <div className="row">
        <div className="col-2 " >
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "20rem",height:"57rem"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    
      <span className="fs-4">Doct.</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
    
        <a href="#" className="nav-link active" aria-current="page" onClick={()=>{
          changeView('Overview')  
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
        <a href="#" className="nav-link link-dark">          
          Payment
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
        <a href="#" className="nav-link link-dark">          
          Settings
        </a>
      </li>
    </ul>
    <hr/>

  </div>
        </div>


        {view === "Overview" &&
        <div className="col-10" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}>
                <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <form className="d-flex serach-input-file-Doc">
                    <img style={{ width: "20px",height:"30px",paddingTop:"6px"}} src={search} alt="" />
                    <input className="form-control me-2" type="search" style={{borderRadius:"2rem",backgroundColor:"transparent"}} placeholder="Search" aria-label="Search"/>

                  
                    </form> 
                    <div>
                    <img style={{ width: "20px",height:"30px",paddingTop:"6px"}} src={bell} alt="" />

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
                <h3>Welcome , Dr Stephen </h3>
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
                    DataAppoitment.map((data,i)=>{
                      return(               
                          <ul className="list-group"  key={i}>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                              <div className="col-1">
                                <img  style={{width:"100%",height:"100",borderRadius:"50rem"}} src={doc1} alt="" />
                              </div>
                              <div className="col-7">
                                <div>
                                  {data.patientName}
                                </div>
                              <span>{data.date}</span>
                              </div>
                              <div className="col-2">
                              <button className='btn btn-learn'onClick={()=>{
                              dispatch(addAvailability({
                                date:data.date,
                                time:data.time,
                                patientName:data.patientName,
                              }))
                              dispatch(acceptAppoitment(data.id))
                              toogle()
                              
                            

                              }} >{data.accepted}</button>

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
                    <h5>Aceepted Appoitments</h5>
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
                        
                    <div className="col-2">Pateint Name</div>
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
        }
        {view === "MyProfile" && <MyProfile/> }
    </div>
  </div>

 


    </>
  )
}
