import React from 'react'
import Style from '../css/Profile.css'
import 'bootstrap';
import { IoMdNotifications} from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import SideBar from "../components/Sidebarprofile.jsx";
import Invitation from '../components/invitationprofile.jsx';



const handleAccept = () => {
  console.log('Accepted invitation');
};
const handleDelete = () => {
  console.log('Deleted invitation');
};
export default function Profiledetaille() {
  return (
    <div>
        <SideBar  SideBar={SideBar}/>

 <input className='search-input'  type="text" name="search"  placeholder="Search.." />
 <IoMdNotifications className='notf ' />
 <FaRegCircleQuestion className='quest' />

 <h1 className='h1'>welcom Doctor stephen </h1>
 <h2  className='h2'>have a nice day at great work</h2>
<br />

 <div className="cart">
<div className="card-body11">

  <h4 className="card-titl">dr.stephane </h4>
  <h3 className='h3'>150 Rates</h3>
  <br />  <br />
</div>
 </div>
 <div className="cart">
<div className="card-body12">

  <h4 className="card-titl">dr.stephane </h4>
  <h3 className='h3'>150 Rates</h3>
  <br />  
</div>
 </div>
 <div className="cart">
<div className="card-body13">

  <h4 className="card-titl">dr.stephane </h4>
  <h3 className='h3'>150 Rates</h3>
  <br />  <br />
</div>
 </div>
 <div className="cart">
<div className="card-body14">

  <h4 className="card-titl">dr.stephane </h4>
  <h3 className='h3'>150 Rates</h3>
  <br />
</div>
 </div>
 <div className="container1">
    <h1 className='h'>Appointment Request</h1>
          <Invitation 
            
            imageSrc="https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg"
            onAccept={handleAccept}
            onDelete={handleDelete}
          />
         
        </div>
      </div>
   
  )
}