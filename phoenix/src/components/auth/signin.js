import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './auth.scss'

const SignIn = (props) => {

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let result;

  const handleUserName = event => {
    setUsername(event.target.value)
  }
  
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    fetch('http://naijahacks-phoenix-api.herokuapp.com/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: userName,
        password: password
      })
    })
    .then(response => response.json())
    .then(user => {
        if (user.id) {
          props.history.push(`/${user.id}/dashboard`)
        }else {
          result = <h3 style={{color: 'red'}}>Incorrect username/password</h3>
        }
    })
  }

  return(
    <div className="form" id="signin">
      <form onSubmit={handleSignIn} className="login">
        <h3 className="header">Login</h3>
        {result}
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
        <p style={{textAlign: "center"}}>don't have an account? <Link to='/signup'>Sign up</Link></p>
      </form>
    </div>
  )
}

export default SignIn;