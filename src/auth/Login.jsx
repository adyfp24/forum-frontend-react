import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dataLogin = {
        name: username,
        password: password
    }

    const handleLogin = async () =>{
        await axios.post('http://127.0.0.1:8000/api/v1/login',  dataLogin)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div>
        <div className='flex justify-center m-5'>
            <div className='flex flex-col'>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={handleLogin}>login</button>
            </div>
        </div>
    </div>
  )
}

export default Login