import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const api_token = localStorage.getItem('api_token');
    useEffect(() => {
        if(api_token){
            navigate('/beranda')
        }
    })

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dataRegist = {
        name: username,  
        email: email,
        password: password
    }

    const handleRegist = async () =>{
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register',  dataRegist)
            if(response.status === 201){
                alert('registrasi sukses');
            }else{
                alert('registrasi gagal')
            }
        } catch (error) {
            alert('regist gagal')
        }
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