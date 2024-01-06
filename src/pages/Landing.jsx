import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const api_token = localStorage.getItem('api_token');
  const navigate = useNavigate();
  useEffect(() => {
    if (api_token) {
      navigate('/beranda');
    }
  })

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dataLogin = {
    name: username,
    password: password
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login', dataLogin);
      const api_token = response.data[0].api_token;
      if (api_token != null && api_token != undefined) {
        localStorage.setItem('api_token', api_token);
        navigate('/beranda');
      } else {
        alert('gagal login');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='flex items-center h-screen justify-center m-5'>
        <div className='flex flex-col'>
          <label htmlFor="username">username</label>
          <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">password</label>
          <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={handleLogin}>login</button>
        </div>
      </div>
    </div>
  )
}

export default Landing