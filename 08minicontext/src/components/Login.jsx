
import React, { useState } from 'react'

export default function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] =useState('')

    function handleSubmit(event){
        //
    }



  return (
    <div>
        <h2>Login</h2>
        <input
        type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Useranme'
        />
        {' '}
        <input
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'

        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}