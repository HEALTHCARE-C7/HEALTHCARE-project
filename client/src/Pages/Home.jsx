import React from 'react'
 import { Component } from 'react'
import NavBarre from '../components/NavBarre.jsx'
import Slide from '../components/Slide.jsx'
import  Style from '../CSS/Home.css'
import slide2 from '../Images/slide2.jpeg' 
import { useDispatch,useSelector } from 'react-redux' 
export default function Home() {
  const dispatch= useDispatch()

  return (
    <>    
    <Slide />
    <main className="container" style={{}}>
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
  </main>
    </>
  )
}
