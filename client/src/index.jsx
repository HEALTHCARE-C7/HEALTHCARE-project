import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom'; 
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx';
 



const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {  
  },[])
  return (
    
   <Router>
     <div>
      <h1>index</h1>
      <Routes>
        <Route  path="/Home" element={<Home/>} >  </Route>
        <Route  path="/" element={<About/>} >  </Route>
      </Routes>
    </div>
   </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
