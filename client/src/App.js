// import React, { useState } from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes,Switch} from  'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux' 
import LoginScreen from "./components/Login.jsx";
import SignUp from "./reducers/SignUp.js";
import ProfileDoc from "./Pages/ProfileDoc.jsx";
import Profiledetaille from "./Pages/Profiledetaille.jsx"





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
        <Route  path="/Login" element={<LoginScreen/>} >  </Route>
        <Route  path="/Signup" element={<SignUp/>} >  </Route>
        <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route>
        <Route  path="/docteur/onedoc" element={<Profiledetaille/>} >  </Route>

      </Routes>
     
     
    
    </div>
  
   </Router>
   
   
  );
};

export default App;
