import React,{createContext, useContext, useState} from 'react'
import Style from '../CSS/Profile.css'
import 'bootstrap';
import { IoMdNotifications} from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import SideBar from "../components/Sidebarprofile.jsx";
import Cart from "../components/invitationprofile.jsx"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';




export default function Profiledetaille() {
  return (
    <div>
   
        <SideBar  SideBar={SideBar}/>

 <input className='search-input1'  type="text" name="search"  placeholder="Search.." />
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
<footer>
<Cart   />
    </footer>
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
   
      </div>
   
  )
}