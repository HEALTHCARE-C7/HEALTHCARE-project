import React, { useState } from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom';
import { useSelector, useDispatch } from 'react-redux' 
import { decrement, increment } from './reducers/counter.js'

let App = () => {
  const count = useSelector((state) => console.log(state))
const [products,setProducts]=useState([])
const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      {/* <h1>{count}</h1> */}
    </div>
  //   <Router>
  //    <div>
  //     <h1>index</h1>
  //     <Routes>
  //       <Route exact  path="/" element={<Home/>} >  </Route>
  //       <Route  path="/About" element={<About/>} >  </Route>

  //     </Routes>
  //   </div>
  //  </Router>
  );
};

export default App;
