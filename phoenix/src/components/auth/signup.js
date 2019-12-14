import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import './auth.scss';

const SignUp = () => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCPassword] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleCPasswordChange = event => setCPassword(event.target.value);

  const handleSignup = event => {
    event.preventDefault();
    console.log(fullname, username, email, password, confirmPassword)
    if(password===confirmPassword){
      axios("http://naijahacks-phoenix-api.herokuapp.com/signup", {
        method: "post",
        headers: {'Content-Type': 'application/json', "Access-control-origin": "*"},
        body: {
          fullname, username, email, password, confirmPassword
        }
      })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            this.props.history.push('/login')
          } else {
            alert('Unable to register')
          }
        }) 
    } else {
        alert('passwords do not match!')
    }
  }

  return(
    <div className="form" id="signup">
      <form onSubmit={handleSignup} className="login">
        <h3 className="header">Sign Up</h3>
        <div className="authForm">
          <fieldset>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={handleNameChange}/>
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" onChange={handleEmailChange}/>
          </fieldset>
          <fieldset>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={handleUsernameChange}/>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={handlePasswordChange}/>
          </fieldset>
          <fieldset>
            <label htmlFor="name">Confirm Password: </label>
            <input type="password" name="confirmPassword" onChange={handleCPasswordChange}/>
          </fieldset>

          <button onClick={handleSignup} className="submit">Sign up</button>
        </div>

        <p style={{textAlign: "center"}}>Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </div>
  )
}

export default SignUp;