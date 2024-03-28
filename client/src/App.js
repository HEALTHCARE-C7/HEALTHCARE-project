import React from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux' 
import DoctorLogin from "./components/DoctorLogin.jsx";
import DoctoreSignup from "./components/DoctoreSignup.jsx";
import PatientLogin from "./components/PatientLogin.jsx";
import PatientSignup from "./components/PatientSignup.jsx";
import ProfileDoc from "./Pages/ProfileDoc.jsx";

let App = () => {
//   const count = useSelector((state) => console.log(state))
// const [products,setProducts]=useState([])
// const dispatch = useDispatch()
  return (

    <Router>
     <div>
     
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/doctor/Login" element={<DoctorLogin/>} >  </Route>
        <Route  path="/doctor/Signup" element={<DoctoreSignup/>} >  </Route>
        <Route  path="/patient/login" element={<PatientLogin/>} >  </Route>
        <Route  path="/patient/Signup" element={<PatientSignup/>} >  </Route>
        <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route>
       


      </Routes>
    </div>
   </Router>
  );
};

export default App;
