import React from 'react'
import { useDispatch,useSelector } from 'react-redux' 
import '../CSS/ProfileDetails.css'
import appoitmentSlide from '../Images/appoitmentSlide.jpg'
import { useState } from "react";
import {addAppoitments } from '../reducers/appoitmentSlice.js'; 





export default function ProfileDetails() {

  const { oneDoc } =useSelector (state => state.doctor)
  const [date,setDate]=useState()
  const [time,setTime]=useState()
  const [patientName,setpatientName]=useState("")
  const [patientEmail,setpatientEmail]=useState()
  const [departement,setdepartement]=useState()
  const [accepted,setaccepted]=useState("Declined")
  const [view,setView]=useState("Bookapp")

  
const changeView = (view) => {
  setView("Bookapp")
}


  const dispatch= useDispatch()

  const submitAppoitments=()=>{    
      dispatch(addAppoitments({       
          date:date,
          time:time,
          patientName:patientName,
          patientEmail:patientEmail,
          accepted:accepted,
          })) 
      }

  return (
   <section>
    <div className="container page-title-details" >
     
      <nav class="navbar navbar-light bg-light" style={{borderRadius:"1rem"}}>
  
    <a class="navbar-brand page-title" href="#"> 
         <h1> Welcome To {oneDoc.firstName} doctor's office</h1>   
    </a> 
  
  <div   style={{paddingRight:"3rem",gap:"1rem",display:"flex"}}> 
  <button className='btn btn2-slide2' onClick={()=>{changeView('Bookapp')}} >Book Appoitment</button>
  <button className='btn btn1-slide2' onClick={()=>{changeView('review')}}  >See All Reviwes</button>

  </div>
  
</nav>



        
        
     
    </div>

    {view ==="Bookapp" && <div className="container">
    <div className="row">
      
      <div className="col-6" >
               <div className="box-Appoitment"  style={{backgroundColor:"#ffffff"}}>
               <h3 className='title-bookAppoitment'>Book Appointment</h3>
                    <div style={{paddingTop:"2rem"}}>
                            <div className="mb-3">
                                <label className="">Name *</label>
                                <input  onChange={(e)=>{setpatientName(e.target.value)}}  placeholder='Full Name *' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label  className="">Email address</label>
                                <input type="email"   onChange={(e)=>{setpatientEmail(e.target.value)}} placeholder='example@gmail.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>                           
                            <div className="mb-3">
                                <label  className="form-label">Departement</label>
                                <select   onChange={(e)=>{setdepartement(e.target.value)}} className="form-select">
                                    <option value="DEP1">Departement</option>
                                    <option value="DEP2">Departement 2</option>
                                    <option value="DEP3">Departement 3</option>

                                </select>
                            </div>
                            <div className="mb-3">
                            <label for="start">Choose date    :</label>

                                <input type="date" onChange={(e)=>{setDate(e.target.value)}} id="start" name="trip-start"  />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Time *</label>
                                <select id=""  onChange={(e)=>{setTime(e.target.value)}} className="form-select">
                                    <option value="9:00" > 9:00 </option>
                                    <option value="10:00"> 10:00 </option>
                                    <option value="11:00"> 11:00 </option>
                                    <option value="12:00"> 12:00 </option>
                                    <option value="15:00"> 15:00 </option>
                                    <option value="16:00"> 16:00 </option>
                                    <option value="17:00"> 17:00 </option>

                                   

                                </select>
                            </div>
                            <button  onClick={()=>{ submitAppoitments()}} className="btn btn-primary">Submit</button>
                    </div>
               </div>
            </div>
     
  <div className="col-6">
    <img style={{width:"100%",height:"100%"}} src={appoitmentSlide} alt="" />
  </div>
</div>
    </div>}

    {view ==="review" && <div className=""></div>}
   </section>
  )
}
