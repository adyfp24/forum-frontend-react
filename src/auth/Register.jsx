import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dataRegist = {
        name: username,  
        email: email,
        password: password
    }

    const handleRegist = async () =>{
        await axios.post('http://127.0.0.1:8000/api/v1/register',  dataRegist)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
  return (
    <div>
        <div className='container flex justify-center m-5'>
            <div className='flex flex-col'>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label htmlFor="password">email</label>
                <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={handleRegist}>register</button>
            </div>
        </div>
    </div>
  )
}

export default Register