import React from 'react'
import axios from 'axios'

function Login() {
    const handleLogin = async () =>{
        await axios.post('http://127.0.0.1:8000/api/v1/login',  c)
    }

  return (
    <div>
        <div className='flex justify-center m-5'>
            <div className='flex flex-col'>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='username'/>
                <label htmlFor="password">password</label>
                <input type="text" placeholder='password' />
                <button type="submit">login</button>
            </div>
        </div>
    </div>
  )
}

export default Login