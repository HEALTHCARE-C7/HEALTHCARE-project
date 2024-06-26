import React, { useEffect, useState } from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
// import axios from 'axios'


import Home2 from "./Pages/Home2.jsx";
import NavBarre from "./components/NavBarre.jsx";
import NavBarreLog from './components/NavBarreLog.jsx';
import Contact from "./Pages/Contact.jsx";
import ProfilePatient from "./Pages/ProfilePatient.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignUp from "./components/SignUp.jsx";
import ProfileDetails from "./Pages/ProfileDetails.jsx";
import ChatPage from "./components/Chat/ChatPage.jsx";
import ProfileDoc from './Pages/ProfileDoc.jsx';



import { fetchDoctor} from './reducers/DoctorLogin.js'
import { fetchpatient} from './reducers/PatientLogin.js'


import { useDispatch } from "react-redux";



let App = () => {
  const dispatch=useDispatch()

  const [LoginView, setLoginView] = useState("logout");

  const changeView=(LoginView)=>{
    setLoginView(LoginView);  
  }
  useEffect(()=>{
    dispatch( fetchDoctor())
    dispatch( fetchpatient())



  },[dispatch])

  return (
    
    <>
    
    <Router>

      {LoginView==="logout" && <NavBarre changeView={changeView} /> }
      {LoginView==="login" && <NavBarreLog changeView={changeView}/>}
    
     <div>
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/Home2" element={<Home2/>} >  </Route>
        <Route  path="/contact" element={<Contact/>} >  </Route>
        <Route  path="/login" element={<LoginPage changeView={changeView}  />}  >  </Route>
        <Route  path="/signup" element={<SignUp  />} >  </Route>  
        <Route  path="/Profile/doc" element={<ProfileDoc  />} >  </Route>
        <Route  path="/Profile/Patient" element={<ProfilePatient  />} >  </Route>  
        <Route  path="/ProfileDetails" element={<ProfileDetails  />} >  </Route>  
        <Route  path="/chat" element={<ChatPage  />} >  </Route>  

      </Routes>
    </div>
  
   </Router>
    </>
   
   
  );
};

export default App;
