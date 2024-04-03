import React,{ useEffect } from "react";

import {fetchDoc} from '../../reducers/DoctorLogin.js'
import { useDispatch,useSelector } from 'react-redux' 


const ChatBar = () => {
  const dispatch= useDispatch()

  const { allDoc } =useSelector (state => state.doctor)
  
  useEffect(() => {
    dispatch(fetchDoc())
    


  }, [dispatch])

console.log(allDoc)

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
{/* {allDoc.map((e)=>{
  console.log(e.firstName)
    return  <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          <p>{e.firstName}</p>
         
        </div>
      </div>
})} */}
    </div>
  );
};

export default ChatBar;