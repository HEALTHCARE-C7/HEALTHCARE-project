import React,{createContext, useContext, useState} from 'react'
import Style from '../css/Profile.css'
import 'bootstrap';
import { IoMdNotifications} from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import SideBar from "../components/Sidebarprofile.jsx";
import Cart from "../components/cart2.jsx"
// import Invitation from "../components/invitationprofile.jsx"
// import MyContextProvider from './MyContextProvider';


// const MyComponent = () => {
//   const { myState, setMyState } = useContext(MyContext);

//   return (
//     <div>
//       <h1>My component: {myState}</h1>
//       <button onClick={() => setMyState('newState')}>Change State</button>
//     </div>
//   );
// };



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
      </div>
   
  )
}