import React, { useState } from 'react'
import '../CSS/FileDoc.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAppoitments,fetchPationOfDoctor,fetchPationOfThisDat,acceptAppoitment } from '../reducers/appoitmentSlice.js'; 
import{fetchreview} from '../reducers/reviewSlice.js'
import doc1 from '../Images/doc1.jpeg';
import axios from 'axios'
import str from '../Images/icons/star.png' 
import search from '../Images/icons/search.png'
import bell from '../Images/icons/bell.png'



export default function FileDoc() {

  const { DataAppoitment } =useSelector (state => state.appoitment)
  const { DotorPation } =useSelector (state => state.appoitment)
  const { toDayAppoitment } =useSelector (state => state.appoitment)
 

  const [isFetch,setIsFetch]=useState(false)
  const [view,setView]=useState('MyProfile')

  
  
  let date = new Date()
  let day = date.getDate()  
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let today = year + '-' + month + '-' + day
  const [user, setUser] = useState({});
  const dispatch=useDispatch()




    useEffect(() => {
    dispatch(fetchAppoitments())
    dispatch(fetchPationOfDoctor(1))
    dispatch(fetchPationOfThisDat(today))
    
 

  }, [isFetch])

   useEffect(() => {
    const fetchProfile = async () => {
      try {
        
        const  token  =localStorage.getItem('token')
        const config={headers:{Authorization:`Bearer ${token}`}}
        const response = await axios.get('http://localhost:5000/api/patient/user',config)
     console.log('res user',response.data);
        setUser(response.data);
        console.log(user);

      } catch (error) {
        
      }
    };
    fetchProfile()
  
  }, [isFetch]);


  const toogle=()=>{
    setIsFetch(!isFetch)  
  }

const changeView =(view)=>{
  setView(view)
  console.log(view);

}


  return (
    <>
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
                <strong>{user.firstName}</strong>
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
                      <div className="card-body" style={{textAlign:""}}>
                        <div>
                        <h5 className="card-title" style={{color:"black"}}>{user.firstName}</h5>
                       
                        <p>{user.email}</p>
                        <p>{user.age} ans</p>
                        <p>{user.gender}</p>
                        <p>{user.phoneNumber}</p>

                        </div>
                            <button className='btn btn1-slide2' style={{borderRadius:"0rem",backgroundColor:"#7a6efe"}}>Edite Profile</button>  
                            
                           
                      </div>
                    </div>
                  </div>                
                <div className="col-8" style={{paddingLeft:"3rem"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
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
                <div className="row"style={{paddingTop:"1rem"}}>
                <div className="col-12" >
                <h5>Reviews</h5>              
              </div>

       

           

                </div>



                

                </div>
            </div>


           



            </div>
    </div>
  </div>

 


    </>
  )
}
