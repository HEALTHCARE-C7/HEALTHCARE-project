import React from 'react';
import '../css/invitaion.css'
import {GrUser } from "react-icons/gr";

const Invitation = ({  imageSrc, onAccept, onDelete }) => {
  return (
    
    <div className="invitation">
        
      <div className="info">
        <img src={imageSrc} alt="Profile Picture" />
        <h3>iheb ghdifi</h3>
       
       
      </div>
      
      <div className="options">
        <button className="accept" onClick={onAccept}>Accept</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
      <br />
      <div className="info">
        <img src={imageSrc} alt="Profile Picture" />
        <h3>brahim ben salah</h3>
      </div>
      <div className="options">
        <button className="accept" onClick={onAccept}>Accept</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
      <br />
      <div className="info">
        <img src={imageSrc} alt="Profile Picture" />
        <h3>youssef naili</h3>
      </div>
      <div className="options">
        <button className="accept" onClick={onAccept}>Accept</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
      <br />
      <div className="info">
        <img src={imageSrc} alt="Profile Picture" />
        <h3>omar mrad </h3>
      </div>
      <div className="options">
        <button className="accept" onClick={onAccept}>Accept</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
      <br />
      <div className="info">
        <img src={imageSrc} alt="Profile Picture" />
        <h3>raed zouaoui</h3>
      </div>
      <div className="options">
        <button className="accept" onClick={onAccept}>Accept</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
      <br />
     








      <br />
      <div className="invitation2">
      <div className="info">
      <GrUser className='user'/>
        <h3>new patient</h3>
       
       
      </div>
      
      <div className="options">
      
      </div>
      <br />
      <div className="info">
      <GrUser className='user1'/> <br />
        <h3>old patient</h3>
      </div>
      <div className="options">
      
      </div>
    
    
     
     
    </div>
    </div>
    
    
  );
};

export default Invitation;
