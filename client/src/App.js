import React from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
// // import { useSelector, useDispatch } from 'react-redux' 
// import DoctorLogin from "./components/DoctorLogin.jsx";
// import DoctoreSignup from "./components/DoctoreSignup.jsx";
// import PatientLogin from "./components/PatientLogin.jsx";
// import PatientSignup from "./components/PatientSignup.jsx";
// import ProfileDoc from "./Pages/ProfileDoc.jsx";
// import LoginScreen from "./components/Login.jsx";
// import SignUp from "./reducers/SignUp.js";
import ProfileDoc from "./Pages/ProfileDoc.jsx";
import Home2 from "./Pages/Home2.jsx";
import NavBarre from "./components/NavBarre.jsx";
import Contact from "./Pages/Contact.jsx";
import OneProfileDoc from "./Pages/Profiledetaille.jsx";




let App = () => {
//   const count = useSelector((state) => console.log(state))
// const [products,setProducts]=useState([])
// const dispatch = useDispatch()
  return (

    <Router>
     <div>
     
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        {/* <Route  path="/About" element={<About/>} >  </Route> */}
        {/* <Route  path="/Login" element={<LoginScreen/>} >  </Route>
        <Route  path="/Signup" element={<SignUp/>} >  </Route> */}
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/Home2" element={<Home2/>} >  </Route>
        <Route  path="/contact" element={<Contact/>} >  </Route>
        <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route>
        <Route  path="/docteur/oneprofile" element={<OneProfileDoc/>} >  </Route>

      </Routes>
    </div>
  
   </Router>
   
   
  );
};

export default App;
