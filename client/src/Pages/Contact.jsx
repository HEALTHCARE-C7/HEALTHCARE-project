import React from 'react'
import style from '../CSS/Contact.css'

function Contact() {
  return (
    <>
    <div className="container-fluid">
        <div className="row slide3">
        </div>         
    </div>

    <div className="container">
        <div className="row">
        <div className="title-services-provide" style={{paddingBottom:"0rem"}}>
                <h6>Get In Touch</h6>
                <h1 className='title-provide'>Contact Us</h1>
                <p className='texte-provide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
        <div className=" row contact-box">
        <div className="col-6 col-contact-box">
                         <label for="" class="form-label">First name</label>
                        <input  style={{ background:"none",border:" 1px solid #007E85"}} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter your first name" />
                </div>
                <div className="col-6 col-contact-box">     
                         <label for="" class="form-label">Last name</label>
                        <input   style={{ background:"none",border:" 1px solid #007E85"}} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter your last name" />
                </div>
                <div className="col-12 col-contact-box">
                <label  for="" class="form-label">Choose a topic</label>
                                <select  style={{ background:"none",border:" 1px solid #007E85"}} id="" class="form-select">
                                    <option>Select One </option>
                                    <option> topic 2 </option>
                                    <option> topic 3 </option>
                                </select>

                </div>
                <div className="col-12 col-contact-box">
                <label for="" class="form-label">Message</label>

                    <textarea   style={{ background:"none",border:" 1px solid #007E85"}} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Type your message..." rows="8" cols="50"  />
                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact
