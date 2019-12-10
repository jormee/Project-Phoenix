import React, { useState } from 'react';

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
    console.log('signin: ', userName, password, props);
  }

  return(
    <form onSubmit={handleSignIn}>
      <fieldset>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" onChange={handleUserName}/>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" onChange={handlePassword}/>
      </fieldset>

      <input type="checkbox" name="remember"/>
      <label htmlFor="remember">Remember me</label>

      <input type='submit' />
    </form>
  )
}

export default SignIn;