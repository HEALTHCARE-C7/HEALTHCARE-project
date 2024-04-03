import React from 'react'
import { useDispatch,useSelector } from 'react-redux' 


export default function ProfileDetails() {

  const { oneDoc } =useSelector (state => state.doctor)

  return (
    <div>
        {console.log("oneDoc",oneDoc)}
      
    </div>
  )
}
