import React,{createContext, useContext, useState} from 'react'
import Style from '../CSS/Profile.css'
import 'bootstrap';
import { IoMdNotifications} from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import SideBar from "../components/Sidebarprofile.jsx";
import Cart from "../components/invitationprofile.jsx"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Commentaire from "../components/commentaireP.jsx"
import { FcStatistics } from "react-icons/fc";




export default function Profiledetaille() {
  return (
    <div>
 
        <SideBar  SideBar={SideBar}/>

 <input className='search-input10'  type="text" name="search"  placeholder="Search.." />
 <IoMdNotifications className='notf ' />
 <FaRegCircleQuestion className='quest' />

 <h1 className='h1'>welcom Doctor stephen </h1>
 <h2  className='h2'>have a nice day at great work</h2>
<br />

{/* <div className="App">
      <h1>Invitations</h1>
      <Invitation />
    </div> */}
     {/* <div className="App1">
      <div className="App-card App-card-header">
        <h2 className="App-card-header-title">Invitation List</h2>
        <div className="App-card-header-actions" />
      </div>
      <Invitation />
    </div> */}
<div className='patientname'>


</div>
<div className='two'>
<Cart   />
<Commentaire/>


</div>

   
    
    <div className="calendar-container"> {/* Add a parent container */}
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                    { title: 'Event 1', date: '2024-03-01' },
                    { title: 'Event 2', date: '2024-03-02' }
                    // Add more events as needed
                ]}
            />
            
        </div>
        <div className="cube10">
<div className="icon10" >

        </div>
      <img className='statistique' src="https://bloximages.chicago2.vip.townnews.com/dailyitem.com/content/tncms/assets/v3/editorial/a/0a/a0a0d3ac-e69b-11ec-9457-03e953b644e3/629facef1514d.image.jpg" alt="img" />
    </div>
      </div>
   
  )
}