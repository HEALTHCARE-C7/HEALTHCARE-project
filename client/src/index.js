import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import  store  from './storeDoctorLogin'
// import stores from './storePatientLogin'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store} >
        <App />
        </Provider>

);
