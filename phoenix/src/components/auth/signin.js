import React, { useState } from 'react';

import './auth.scss'

const SignIn = (props) => {

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = event => {
    setUsername(event.target.value)
  }
  
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    //TODO: post login details to server for authentication.
    console.log('signin: ', userName, password, props);
  }

  return(
    <div className="form" id="signin">
      <form onSubmit={handleSignIn} className="login">
        <h3 className="header">Login</h3>
        <div className="authForm">
          <fieldset>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={handleUserName}/>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={handlePassword}/>
          </fieldset>

          <button onClick={handleSignIn} className="submit">Login</button>
        </div>
        <p style={{textAlign: "center"}}>don't have an account? <a href='#signup'>Sign up</a></p>
      </form>
    </div>
  )
}

export default SignIn;