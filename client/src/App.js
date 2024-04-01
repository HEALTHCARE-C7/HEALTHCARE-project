import React,{useState,useEffect} from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
import axios from 'axios'


import Home2 from "./Pages/Home2.jsx";
import NavBarre from "./components/NavBarre.jsx";
import Contact from "./Pages/Contact.jsx";
import ProfilePatient from "./Pages/ProfilePatient.jsx";
import FileDoc from "./Pages/FileDoc.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignUp from "./components/SignUp.jsx";
import FetchToken from "./components/FetchToken.jsx";
// import ChatRoom from "./components/Chat/ChatRoom.jsx";
import  io  from "socket.io-client";
// import socketIO from 'socket.io-client';
import ChatPage from "./components/Chat/ChatPage.jsx";



// const socket = io('http://localhost:5000');

let App = () => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
        
  //       const  token  =localStorage.getItem('token')
  //       const config={headers:{Authorization:`Bearer ${token}`}}
  //       const response = await axios.get('http://localhost:5000/api/patient/user',config)
  //    console.log('res user',response.data);
  //       setUser(response.data);
  //       console.log(user);

  //     } catch (error) {
        
  //     }
  //   };
  //   fetchProfile()
  
  // }, []);
  // useEffect(()=>{
  //   const fetchDoctor = async () => {
  //     try {
        
  //       const  token  =localStorage.getItem('token')
  //       const config={headers:{Authorization:`Bearer ${token}`}}
  //       const response = await axios.get('http://localhost:5000/api/doctor/user',config)
  //    console.log('res doc',response.data);
  //       setUser(response.data);
  //       console.log(user);
  //     } catch (error) {
        
  //     }
  //   };

  //   fetchDoctor();
  // },[])
  // console.log(user);
    // const refreshToken = localStorage.getItem('token');
    // console.log('hello world',refreshToken)

  return (

    <Router>
     <div>
      <NavBarre/>
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/Home2" element={<Home2/>} >  </Route>
        <Route  path="/contact" element={<Contact/>} >  </Route>
        <Route  path="/login" element={<LoginPage/>} >  </Route>
        <Route  path="/signup" element={<SignUp/>} >  </Route>  
        <Route  path="/FileDoc" element={<FileDoc/>} >  </Route>
        <Route  path="/fetch" element={<FetchToken/>} >  </Route>  
        <Route  path="/ProfilePatient" element={<ProfilePatient/>} >  </Route>  

        {/* <Route  path="/chat" element={<ChatRoom/>} >  </Route>   */}
        {/* <Route path="/chat" element={<ChatPage socket={socket} />}></Route> */}


        

        {/* <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route>
        <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route> */}
      </Routes>
    </div>
  
   </Router>
   
   
  );
};

export default App;
