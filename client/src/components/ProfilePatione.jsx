// import React from 'react'
// import MyProfile from './MyProfile';
// import  { useState } from 'react'
// import search from '../Images/icons/search.png'
// import doc1 from '../Images/doc1.jpeg';
// import str from '../Images/icons/star.png' 
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBRow,
//   MDBTextArea,
// } from "mdb-react-ui-kit";
// // import commentaireP from '../components/commentaireP/commentaire.jsx'
// export default function ProfilePatione({DataReviews}) {
//     const [view,setView]=useState('Overview')
//     const changeView =(view)=>{
//       setView(view)
//       console.log(view);
    
//     }
//   return (
//     <div className="col-10" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}>
//   {/* {console.log("DataReviews",DataReviews)} */}

//                 <nav className="navbar">
//                 <div className="container-fluid">
//                     <form className="d-flex serach-input-file-Doc">
//                     <input className="form-control me-2" style={{borderRadius:"2rem",backgroundColor:"transparent"}} type="search" placeholder="Search" aria-label="Search"/>
//                     <img style={{ width: "20px",height:"30px",paddingTop:"6px"}} src={search} alt="" />

                  
//                     </form> 
//                      <div>
//                     <div className="dropdown">
//               <a href="#" onClick={()=>{
//                   changeView('MyProfile');  
//                 }} className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
//                 <strong>mdo</strong>
//               </a>
//               <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
//                 <li><a className="dropdown-item" href="#">New project...</a></li>
//                 <li><a className="dropdown-item" href="#">Settings</a></li>
//                 <li><a className="dropdown-item" href="#">Profile</a></li>
//                 <li><hr className="dropdown-divider"/></li>
//                 <li><a className="dropdown-item" href="#">Sign out</a></li>
//               </ul>
//             </div>
//                     </div>
//                 </div>

//                  </nav>

//             <div className="row">
//               <div className="col-12" style={{paddingBottom:"3rem"}}>
//                 <h3>My Profile </h3>              
//               </div>
//               </div>
//               <div className="row" style={{gap:"1rem"}}>
//                 <div className="col-2" style={{paddingBottom:"2rem"}}>
//                   <div className="card" style={{width:"18rem"}}>
//                       <img src={doc1} style={{borderRadius:"50rem",width:"150px",height:"150px",marginLeft:"4rem",marginTop:"1rem"}} className="card-img-top" alt="..."/>
//                       <div className="card-body" style={{textAlign:"center"}}>
//                         <div>
//                         <h5 className="card-title" style={{color:"black"}}>name</h5>
//                         <p>specialité</p>
//                         </div>
//                             <button className='btn btn1-slide2' style={{borderRadius:"0rem",backgroundColor:"#7a6efe"}}>Edite Profile</button>  
//                             <p>146 Rates</p>
//                             <div className='img-card-star' style={{textAlign:"center",paddingLeft:"4.2rem"}} >
//                         <img src={str} className="" alt="..."/>
//                         <img src={str} className="" alt="..."/>
//                         <img src={str} className="" alt="..."/>
//                         <img src={str} className="" alt="..."/>
//                         <img src={str} className="" alt="..."/>
//                     </div>
//                       </div>
//                     </div>
//                   </div>                
//                 <div className="col-8">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                         <div className="container-fluid">
//                             <a className="navbar-brand" href="#">My Profile</a>
//                             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="#">Change Password</a>
//                                 </li>
//                                 <li className="nav-item">
//                                 <a className="nav-link" href="#">Notification</a>
//                                 </li>
//                                 <li className="nav-item">
//                                 <a className="nav-link" href="#">Reviews</a>
//                                 </li>
                                
//                             </ul>
//                             </div>
//                         </div>
//                 </nav>
//                 <div className="row"style={{paddingTop:"1rem"}}>
//                 <div className="col-12" >
//                 <h5>Reviews</h5>              
//               </div>

//                 {/* <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">the quick fox jumps over the 
//                         lazy dog</h5>
//                     <p className="card-text">Things on a very small scale 
//                         behave like nothing </p>
                   
//                 </div>
//                 </div> */}

//           <div className="carousel">
//             <div className="card-container">
//                 {DataReviews.map((data,i)=>{
//                   return(

//                     <MDBCol md="12" lg="10" xl="8" key={i} style={{paddingBottom:"1rem"}}>
//             <MDBCard>
//               <MDBCardBody>
//                 <div className="d-flex flex-start align-items-center">
//                   <MDBCardImage
//                     className="rounded-circle shadow-1-strong me-3"
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
//                     alt="avatar"
//                     width="60"
//                     height="60"
//                   />
//                   <div>
//                     <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
//                     <p className="text-muted small mb-0">
//                       Shared publicly - Jan 2020
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-3 mb-4 pb-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip consequat.
//                 </p>

//                 <div className="small d-flex justify-content-start">
//                   <a href="#!" className="d-flex align-items-center me-3">
//                     <MDBIcon far icon="thumbs-up me-2" />
//                     <p className="mb-0">Like</p>
//                   </a>
//                   <a href="#!" className="d-flex align-items-center me-3">
//                     <MDBIcon far icon="comment-dots me-2" />
//                     <p className="mb-0">Comment</p>
//                   </a>
//                   <a href="#!" className="d-flex align-items-center me-3">
//                     <MDBIcon fas icon="share me-2" />
//                     <p className="mb-0">Share</p>
//                   </a>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//                      </MDBCol>
//                   )
                  
//                 })}
//             </div>
//           </div>
           

//                 </div>



                

//                 </div>
//             </div>


//             {/* Profile User */}
//             {/* <MyProfile/> */}
           



//             </div>
//   )
// }
