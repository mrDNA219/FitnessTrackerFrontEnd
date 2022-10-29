// logs in the userimport React, { useState } from 'react';

import { loginUser } from '../api';
import {react, useState} from 'react'

const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    if (results.message === "you're logged in!") {
      setToken(results.token.value);
      window.localStorage.setItem('token', results.token);
      navigate('/')
    } else {
      console.error("error logging in");
      setErrorMessage('error logging in, please make sure your username and password are correct')
    }
  }
  
  return (
    <div id="login-heading">
      <img className="register-img" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-bench-press-fitness-kiranshastry-gradient-kiranshastry.png"></img>
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      {
        errorMessage ? (
        <div>{errorMessage}</div>
        ) : (null)
      }
      <input className='enterLoginUsername'
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />

      <br></br>
      
      <input className='enterLoginPassword'
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br>

      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Login;