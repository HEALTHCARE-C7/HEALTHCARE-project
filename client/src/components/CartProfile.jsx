import React from "react";
import Style from '../CSS/Profile.css'
import { FaStar } from 'react-icons/fa';
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

export default function CartProfile() {

    return (


        <div>
<div className="cart" style={{ width: "500px" }}>
<div className="card-body1">
<img className="card-img-bottom1" src="https://www.legalmedcard.com/wp-content/uploads/2019/06/doctor-img-01-free-img.jpg" alt="Card image"  />
<br /> <br /> <br /><br />
  <h4 className="card-titl">dr.stephane </h4>
  <br /><br />
  <a className="b">edit Profile</a>
  <br /><br /><br /><br />
  <h3 className='h3'>150 Rates</h3>
  <br />
  
  <FaStar className='FaStar' color="gold" size={30} />
  <FaStar color="gold" size={30} />
  <FaStar color="gold" size={30} />
  <FaStar color="gold" size={30} />
   <FaStar color="gold" size={30} />
  
</div>


</div>


<div className="container">
<h2>Review</h2>
<section className="vh-100" >
   
     
          <MDBCol md="12" lg="10" xl="8">
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
        
      
   
   
     
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://m.media-amazon.com/images/M/MV5BZDA1ODgyODEtOWI3Yy00N2UzLTk5ZGMtZGI1MzU5YzFkZDQ1XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">Loly slovetitich</h6>
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
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCkoANluJuSi_Si8y5af6dkvSOUVpootMivhgS-qmVQ&s"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">morad Colan</h6>
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
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrOx0JOBzKIvaNkYIPD6ZuK-KcqKTQW2lZ7xx5OFyHQ&s"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">michelle porovitch</h6>
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
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://pictures.artify.tn/media/wpz8fttbcujitmjnwcoe.jpg"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">marlina gh</h6>
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
        
      
    </section>


</div>
   </div>
    )}
 