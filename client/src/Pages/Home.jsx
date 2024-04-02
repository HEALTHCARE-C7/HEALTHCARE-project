import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import NavBarre from '../components/NavBarre.jsx'
import Slide from '../components/Slide.jsx'
import  '../CSS/Home.css'
import slide2 from '../Images/slide2.jpeg' 
import { useDispatch,useSelector } from 'react-redux' 
import cardimg1 from '../Images/card-img1.jpeg'
import doc1 from '../Images/doc1.jpeg' 

import { useState } from "react";
import {fetchDoc,fetchDocByDep} from '../reducers/DoctorLogin.js'
import {fetchService} from '../reducers/serviceSlice.js'
import axios from 'axios'

export default function Home(props) {
  const dispatch= useDispatch()
  const { allDoc } =useSelector (state => state.doctor)
  const { DocByDep } =useSelector (state => state.doctor)
 

  const { serviceData } =useSelector (state => state.service)



  

  useEffect(() => {
    dispatch(fetchDoc())
    dispatch(fetchService())
    dispatch(fetchDocByDep('General'))


  }, [])

  return (
    <>    
  
    <Slide />
    <main className="container" style={{}}>
      {/* {console.log("user",user)} */}


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
              <button type="button" className="btn btn-search" onClick={()=>{
                // dispatch(read())
              }}><h6>Search</h6> </button>
              </div>

          </div>
        </div>

        <div className="container" style={{paddingTop:"3rem"}}>
          <div className="row" style={{textAlign:"center"}}>
            <h3 style={{paddingBottom:"2rem", color:"#007E85"}}>Our results in numbers</h3>
            <div className="col-3 col-results-numbers"><p className='p-numbers'>99%</p><h5> Customer satisfaction</h5></div>
            <div className="col-3 col-results-numbers"><p className='p-numbers'>15k</p><h5> Online Patients</h5></div>
            <div className="col-3 col-results-numbers"><p className='p-numbers'>12k </p><h5>Patients Recovered</h5></div>
            <div className="col-3 col-results-numbers"><p className='p-numbers'>240%</p><h5> Company growth</h5></div>

          </div>
        </div>

        <div className="container" style={{paddingTop:"5rem"}}>
          <div className="row">
            <div className="col-6">
              <div className='title-slide2'>
                <h1> You have lots of reasons to choose us</h1>
              </div>
              <div className='text-slide-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
              </div>
              <div className='btn-slide-2'>
              <button type="button" className="btn btn1-slide2"><h6>Get started</h6> </button>
              <button type="button" className="btn btn2-slide2" onClick={()=>{
                // dispatch(write({value:"brahim"}))+
                }}><h6>Talk to sales</h6> </button>

              </div>

            </div>
            <div className="col-6" >
              <img src={slide2} alt="" style={{width:"100%",height:"100%"}} />
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
                  {
                    serviceData.map((data,i)=>{
                      return(
                            <div className="col-4 col-services" key={i}>
                                <div className="card" style={{borderRadius:"1.5rem"}}>
                                <img  src={cardimg1} className="card-img-top card-img-top-services" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title card-title-services" onClick={()=>{
                                          dispatch(fetchDocByDep(data.departement))
                                         
                                    }}  ><a  style={{textDecoration:"none",color:"#007E85"}} href="#service">{data.departement}</a></h5>
                                    <p className="card-text card-text-services">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                                    <button type="button" className="btn btn-learn">Learn More..</button>   
                                </div>
                                </div>
                              </div> 
                      )

                    })
                  }
                
                  
                </div>           
                </div>
        </div>
        {/* Our Doctors***************************************************** */}
        <div className="container">
          <div className="row">
            <div className="title-services-provide">
                 <h1 className='title-provide'>Our Doctors</h1>
                <p className='texte-provide'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
               
              <div className="row" id="service">
              {DocByDep.map((data,i) =>{
                return(
                   <div className="col-4" key={i} style={{paddingBottom:"2rem",paddingTop:"2rem"}}>
                  <div className="card" style={{width:"18rem",borderRadius:"1.5rem"}}>
                      <img src={doc1} style={{borderRadius:"50rem",width:"150px",height:"150px",marginLeft:"4rem",marginTop:"1rem"}} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <div>
                        <h5 className="card-title" style={{color:"#007E85"}}>{data.firstName}</h5>
                        <p>{data.speciality}</p>
                        </div>
                        <p className="card-text" style={{color:"#8a8a8a"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a  className="btn btn1-slide2"   ><Link   to="/Home2"  style={{textDecoration:"none",color:"white"}}  >Make Appoitment</Link></a>
                      </div>
                    </div>
                  </div> 
                )
               })}
              </div>
              

            </div>
          </div>
        </div>











  </main>
    </>
  )
}
