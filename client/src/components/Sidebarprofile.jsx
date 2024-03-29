import React from "react";
import Style from '../CSS/Profile.css'
import { AiOutlineMessage } from "react-icons/ai";
import {GrUser } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { MdPayment,MdOutlineGridView } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function SideBar() {
    return (

     
<div className='sideBar'>
  <ul className='li'>
 
  
   <li > 
   <Link className="link" to="docteur/onedoc">Overview 
   <MdOutlineGridView />
   </Link>
   </li>

<br />  <br />
<li href="#about"> <BsCalendarDate /> Apionetment</li>
<br /> <br />

<li href="#contact"><IoTimeOutline />  Schedul timings</li>
<br /> <br />

<li href="#contact">  <MdPayment /> Payment</li>
<br />  <br />

<li  href="#about"> <AiOutlineMessage />  Message</li>
<br />  <br />

<li href="#about"> <FiFileText /> Blog</li>
<br />  <br />

<li href="#about"> <IoMdSettings /> Settings</li>
<br />  <br />

<li href="#about"> <GrUser />My patients</li>
</ul>
</div>
)
    }
