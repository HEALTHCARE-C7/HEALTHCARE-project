import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchToken = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        
        const  token  =localStorage.getItem('token')
        const config={headers:{Authorization:`Bearer ${token}`}}
        const response = await axios.get('http://localhost:5000/api/patient/user',config)
     console.log('res data',response.data);
        setUser(response.data);
      } catch (error) {
        
      }
    };

    fetchProfile();
  }, []);
  console.log(user);
    const refreshToken = localStorage.getItem('token');
    console.log('hello world',refreshToken)
  return (
    <div>
      heloo
    </div>
  )
}

export default FetchToken
