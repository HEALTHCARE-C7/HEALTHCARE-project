import React from 'react'
import '../CSS/ProfileDetails.css'
import { useDispatch,useSelector } from 'react-redux' 
import { useState } from "react";
import {addAppoitments } from '../reducers/appoitmentSlice.js'; 
import { useEffect } from "react";
import { fetchreview,addReview} from '../reducers/reviewSlice.js'
import appoitmentSlide from '../Images/appoitmentSlide.jpg'
import { FaShare } from "react-icons/fa";

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




export default function ProfileDetails() {

  const { DataReviews } =useSelector (state => state.review)
  const { oneDoc } =useSelector (state => state.doctor)
  const [isFetch,setIsFetch]=useState(false)

  const [date,setDate]=useState()
  const [time,setTime]=useState()
  const [patientName,setpatientName]=useState("")
  const [patientEmail,setpatientEmail]=useState()
  const [departement,setdepartement]=useState()
  const [comment,setcomment]=useState("")
  const [doctorId,setdoctorId]=useState()
 

  

  const { data } =useSelector (state => state.patient)


  const [accepted,setaccepted]=useState("Declined")
  const [view,setView]=useState("Bookapp")
  const [likeCounter, setLikeCounter] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  
const changeView = (view) => {
  setView(view)
}

useEffect(()=>{
  dispatch(fetchreview(oneDoc.id))

},[isFetch])
const toggle=()=>{
  setIsFetch(!isFetch)
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
      const incrementLikeCounter = () => {
        setLikeCounter(likeCounter + 1);
      };
      const toggleCommentInput = () => {
        setShowCommentInput(!showCommentInput);
      };

  return (
   <section>
    {console.log("data Patient",data)}

    
    <div className="container page-title-details" >
     
      <nav className="navbar navbar-light bg-light" style={{borderRadius:"1rem"}}>
  
              <a className="navbar-brand page-title" href="#"> 
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

      {view ==="review" && <div className="container">
      <div className="row"style={{paddingTop:"1rem",paddingLeft:"5rem"}}>
                                    <div className="col-6" >
                                    <h5>Reviews</h5>              
                                  </div>
                                  <div style={{textAlign:"end",paddingRight:"7rem"}} className="col-6">
                                   <button  onClick={()=>{
                                    changeView("addComment")
                                   }} className='btn'>
                                   <h5> Add Comment</h5>
                                   </button>
                                  </div>
                    
                    
                    
                              <div className="col-12">
                                <div className=" col-11 card-container">
                                    {DataReviews.map((data,i)=>{
                                      return(
                    
                                        <MDBCol key={i} style={{paddingBottom:"1rem"}}>
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
                                        <h6 className="fw-bold text-primary mb-1">{data.patientName}</h6>
                                        <p className="text-muted small mb-0">
                                          Shared publicly - {data.createdAt}
                                        </p>
                                      </div>
                                    </div>
                    
                                    <p className="mt-3 mb-4 pb-2">{data.comment}
                                    </p>
                                    
                    
                                    <div className="small d-flex justify-content-start">
                                      <a href="#!" className="d-flex align-items-center me-3">
                                        <MDBIcon far icon="thumbs-up me-2" />
                                        <button className="btn d-flex align-items-center me-3" onClick={incrementLikeCounter}>
                                <MDBIcon far icon="thumbs-up me-2" />
                                <p className="mb-0">Like {likeCounter}</p>
                              </button>
                                        {/* <p className="mb-0">Like</p>  */}
                                      </a>
                                      <a href="#!" className="d-flex align-items-center me-3" >
                                        <MDBIcon far icon="comment-dots me-2" />
                                        <button className=" btn btn2-slide2 d-flex align-items-center me-3" onClick={toggleCommentInput}>
                                <MDBIcon far icon="thumbs-up me-2" />
                              
                              </button>
                              
                                        {/* <p className="mb-0">Comment {showCommentInput}</p> */}
                                      </a>
                                      <a href="#!" className="d-flex align-items-center me-3">
                                      
                                       
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
        
      </div>}
      {view ==="addComment" && 
      <div className="container">
        <div className="row">
        <div className="col-12 col-contact-box">
                <label for="" className="form-label">Add youre Comment</label>

                    <textarea  onChange={(e)=>{setcomment(e.target.value)}}  style={{ background:"none",border:" 1px solid #007E85"}} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Type your message..." rows="8" cols="50"  />
                </div>
                <div style={{textAlign:"center",paddingTop:"3rem"}}>
                <button  onClick={()=>{

              dispatch(addReview({
                comment:comment,
                patientName:data.firstName,
                doctorId:oneDoc.id           
              }))
            
              toggle()
                

                }} style={{textAlign:"center",width:"50%"}}   className='btn btn1-slide2'>Send</button>

                </div>
        </div>

        
      </div>
   
                }
   </section>
  )
}
