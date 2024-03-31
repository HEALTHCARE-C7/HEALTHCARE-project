import React from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
import DoctorLogin from "./components/DoctorLogin.jsx";
import DoctoreSignup from "./components/DoctoreSignup.jsx";
import PatientLogin from "./components/PatientLogin.jsx";
import PatientSignup from "./components/PatientSignup.jsx";
import ProfileDoc from "./Pages/ProfileDoc.jsx";
import Home2 from "./Pages/Home2.jsx";
import NavBarre from "./components/NavBarre.jsx";
import Contact from "./Pages/Contact.jsx";
import { useEffect } from "react";
import { fetchAppoitments } from "./reducers/appoitmentSlice.js"; 
import { useDispatch } from "react-redux";
import FileDoc from "./Pages/FileDoc.jsx";
// import OneProfileDoc from "./Pages/Profiledetaille.jsx";






let App = () => {
 

  return (

    <Router>
     <div>
      {/* <NavBarre/> */}
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/Home2" element={<Home2/>} >  </Route>
        <Route  path="/contact" element={<Contact/>} >  </Route>
        <Route  path="/doctor/Login" element={<DoctorLogin/>} >  </Route>
        <Route  path="/doctor/Signup" element={<DoctoreSignup/>} >  </Route>
        <Route  path="/patient/login" element={<PatientLogin/>} >  </Route>
        <Route  path="/patient/Signup" element={<PatientSignup/>} >  </Route>
        <Route  path="/FileDoc" element={<FileDoc/>} >  </Route>

         {/* <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route> */}
        <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route> 
      </Routes>
    </div>
  
   </Router>
   
   
  );
};

export default App;