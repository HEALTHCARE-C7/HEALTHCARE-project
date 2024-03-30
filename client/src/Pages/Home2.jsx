import React from 'react'
import '../CSS/Home2.css' 
import cardimg1 from '../Images/card-img1.jpeg'
import cardimg2 from '../Images/card-img2.jpeg'
import cardimg3 from '../Images/card-img3.jpeg'
import cardimg4 from '../Images/card-img4.jpeg'
import cardimg5 from '../Images/card-img5.jpeg'
import cardimg6 from '../Images/card-img6.jpeg'
import str from '../Images/icons/star.png' 
import doc1 from '../Images/doc1.jpeg' 
import doc2 from '../Images/doc2.jpeg' 
import doc3 from '../Images/doc3.jpeg' 

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addAppoitments } from '../reducers/appoitmentSlice.js'; 







function Home2() {
    const [date,setDate]=useState()
    const [time,setTime]=useState()
    const [patientName,setpatientName]=useState("")
    const [patientEmail,setpatientEmail]=useState()
    const [departement,setdepartement]=useState()
    const [accepted,setaccepted]=useState(false)



  const dispatch= useDispatch()

    const submitAppoitments=()=>{    
        dispatch(addAppoitments({       
            date:date,
            time:time,
            patientName:patientName,
            patientEmail:patientEmail,
            departement:departement,
            accepted:accepted,
            })) 
        }
  return (
    <>
    
         <div className="container-fluide" style={{paddingBottom:"5rem"}}>
    <div className="row slide3">
       
          
            <div className="col-5 col-box-slide">
            <div className='title-slide3'>
              <h1>Meet the Best Hospital</h1>
            </div>
            <div className='text-slide-3'>
              <p>We know how large objects will act, 
                but things on a small scale.</p>
            </div>
            <div className='btn-slide-3 '>
            <button type="button" className="btn btn1-slide2"><h6>Get Quote Now</h6> </button>
            <button type="button" className="btn btn2-slide2"><h6>Learn More</h6> </button>

            </div>
            </div>
            <div className="col-5  col-box-slide2" >
               <div className="box-Appoitment">
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

        
        
    </div>
        </div>


        <div className="container" style={{backgroundColor:"white",paddingBottom:"0.5rem",borderRadius:"20px"}}>
        <div className="row" style={{height:"7rem" ,textAlign:"center"}}>
            <div className="col-3" style={{paddingTop:"1rem"}}>
                <h4 style={{paddingRight:"2.1rem"}}>Find A Doctor</h4>
                <input style={{border:" 1px solid #007E85"}} placeholder='Name' type="text" />
            </div>
            <div className="col-3 " style={{paddingTop:"3.1rem"}}>
                <input  style={{border:" 1px solid #007E85"}} type="text" placeholder='Speciality' />
            </div>
            <div className="col-3" style={{display:"flex",gap:"1.5rem",paddingTop:"3rem"}}>
                <h4>Available</h4>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>

            </div>
            <div className="col-3" style={{paddingTop:"2rem"}}>
            <button type="button" className="btn btn-search"><h6>Search</h6> </button>
            </div>

        </div>
        </div>


        <div className="container" >
            <div className="row">
            <div className="title-services-provide">
            <h1 className='title-provide'>Services we provide </h1>
                <p className='texte-provide'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
            </div>
            <div className="row row-card-services" >
                <div className="col-4 col-services">
                    <div className="card">
                    <img  src={cardimg1} className="card-img-top card-img-top-services" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title card-title-services">Dental treatments</h5>
                        <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <button type="button" className="btn btn-learn">Learn More..</button>   
                    </div>
            </div>
                </div>
                <div className="col-4 col-services">
                    <div className="card">
                    <img src={cardimg2} className="card-img-top card-img-top-services" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title card-title-services">Bones treatments</h5>
                        <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <button type="button" className="btn btn-learn">Learn More..</button>   
                    </div>
            </div>
                </div>
                <div className="col-4 col-services">
                    <div className="card">
                    <img src={cardimg3} className="card-img-top card-img-top-services" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title card-title-services">Diagnosis</h5>
                        <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <button type="button" className="btn btn-learn">Learn More..</button>   
                    </div>
            </div>
                </div>
                <div className="col-4 col-services">
                    <div className="card">
                    <img src={cardimg4} className="card-img-top card-img-top-services" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title card-title-services">Cardiology</h5>
                        <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <button type="button" className="btn btn-learn">Learn More..</button>   
                    </div>
            </div>
                </div>
                <div className="col-4 col-services">
                    <div className="card">
                    <img   src={cardimg5} className="card-img-top card-img-top-services" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title card-title-services">Surgery</h5>
                        <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <button type="button" className="btn btn-learn">Learn More..</button>   
                    </div>
            </div>
                </div>
                <div className="col-4 col-services">
                    <div className="card">
                    <img src={cardimg6} className="card-img-top card-img-top-services" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title card-title-services">Eye care</h5>
                        <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        <button type="button" className="btn btn-learn">Learn More..</button>   
                    </div>
            </div>
                </div>
            </div>
            
        
            </div>
        </div>

        <div className="container" >
        <div className="row">
        <div className="title-services-provide" style={{paddingBottom:"3rem"}}>
            <h1 className='title-provide'>what our customers say </h1>
                <p className='texte-provide'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="col-4" >
                <div className="card">
                <div className="card-body">
                    <div className='img-card-star' >
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                    </div>
                    <p className="card-text card-text-services">Slate helps you see how many 
                        more days you need to work to 
                        reach your financial goal.</p>
                   <div>
                    <img  className='doc-img-card' src={doc1} alt="" />

                    </div> 
                </div>  
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                <div className="card-body">
                    <div className='img-card-star' >
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                    </div>
                    <p className="card-text card-text-services">Slate helps you see how many 
                        more days you need to work to 
                        reach your financial goal.</p>
                   <div>
                    <img  className='doc-img-card' src={doc2} alt="" />

                    </div> 
                </div>  
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                <div className="card-body">
                    <div className='img-card-star' >
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                        <img src={str} className="" alt="..."/>
                    </div>
                    <p className="card-text card-text-services">Slate helps you see how many 
                        more days you need to work to 
                        reach your financial goal.</p>
                   <div>
                    <img  className='doc-img-card' src={doc3} alt="" />

                    </div> 
                </div>  
                </div>
            </div>
            </div>    
            
        </div>  


        <div className="container">
            <div className="row">
            <div className="title-services-provide" style={{paddingBottom:"0rem"}}>
                <h1 className='title-provide'>FAQ</h1>
                <p className='texte-provide'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">the quick fox jumps over the 
                        lazy dog</h5>
                    <p className="card-text">Things on a very small scale 
                        behave like nothing </p>
                   
                </div>
                </div>
            </div>
            <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">the quick fox jumps over the 
                        lazy dog</h5>
                    <p className="card-text">Things on a very small scale 
                        behave like nothing </p>
                   
                </div>
                </div>
            </div>   
            <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">the quick fox jumps over the 
                        lazy dog</h5>
                    <p className="card-text">Things on a very small scale 
                        behave like nothing </p>
                   
                </div>
                </div>
            </div>   
            <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">the quick fox jumps over the 
                        lazy dog</h5>
                    <p className="card-text">Things on a very small scale 
                        behave like nothing </p>
                   
                </div>
                </div>
            </div>   
            <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">the quick fox jumps over the 
                        lazy dog</h5>
                    <p className="card-text">Things on a very small scale 
                        behave like nothing </p>
                   
                </div>
                </div>
            </div>   
            <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">the quick fox jumps over the 
                        lazy dog</h5>
                    <p className="card-text">Things on a very small scale 
                        behave like nothing </p>
                   
                </div>
                </div>
            </div>               
            </div>
        </div>


        <div className="container">
            <div className="row">
                <div className="title-services-provide" style={{paddingBottom:"0rem"}}>
                    <h1 className='title-provide'>Subscribe to our newsletter</h1>
                    <div className='texte-provide' style={{display:"flex",gap:"1rem",justifyContent:"center"}}>
                        <input type="text"  placeholder="   Enter your email" style={{borderRadius:"5rem",width:"20rem"}} name="" id="" />
                        <button className='btn btn1-slide2 ' >Search</button>
                    </div>
                </div>
                <div className="col-4" style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
                
                </div>  
            </div>
        </div>





     
    </>
 
  )
}

export default Home2
 