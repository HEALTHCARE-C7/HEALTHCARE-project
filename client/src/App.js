import React, { useState } from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
import { useSelector, useDispatch } from 'react-redux' 
import { decrement, increment } from './reducers/counter.js'
import ProfileDoc from "./Pages/ProfileDoc.jsx";



let App = () => {
  const count = useSelector((state) => console.log(state))
const [products,setProducts]=useState([])
const dispatch = useDispatch()
  return (

    <Router>
     <div>
      <h1></h1>
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/docteur/profile" element={<ProfileDoc/>} >  </Route>


      </Routes>
    </div>
   </Router>
  );
};

export default App;
