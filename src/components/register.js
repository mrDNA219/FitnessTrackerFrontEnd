// As a registered user I want to:

// be able to log in with my username/password combination
// see meaningful messages if there are errors during login, so that I may correct them
// stay logged in between page visits (for example, if I close my browser, and come back later)
// be able to log out if I am logged in
// see tabbed navigation for Routines, My Routines (once logged in), and Activities (with matching routes)


import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = ({ setToken, navigate }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async () => {
    const results = await registerUser(username, password);
    if(password.length < 8){
      setErrorMessage("please enter a password that is at least 8 characters long");
      
    } else if (results.message === "you're signed up!") {
      setToken(results.token);
      window.localStorage.setItem('token', results.token);
      navigate("/")
      
    } else {
      console.error("error registering user");
      setErrorMessage('Username is already taken');
    }
  }
  
  return (
    <div id="register-heading">
      <img className="register-img" src="https://img.icons8.com/nolan/344/task.png"></img>
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      {
        errorMessage ? (
          <div>{errorMessage}</div>
        ) : (null)
      }
      <br></br>

      <input className='newUsername'
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />

      <br></br>

      <input className='newUserPassword'
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

export default Register;