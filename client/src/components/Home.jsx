import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from "./Login.jsx";
var Home = (props) => {
  return (
    <Routes>
      <Route path='/login' element={<LoginScreen />} />
    </Routes>
  );
};

export default Home;

