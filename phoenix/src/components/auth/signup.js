import React from 'react';

import './auth.scss';

const SignUp = () => {

  const handleSignup = event => {
    event.preventDefault();
    //TODO: post signup details to server.

    console.log('hello')
  }

  return(
    <div className="form" id="signup">
      <form onSubmit={handleSignup} className="login">
        <h3 className="header">Sign Up</h3>
        <div className="authForm">
          <fieldset>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Confirm Password: </label>
            <input type="password" name="confirmPassword" />
          </fieldset>

          <button onClick={handleSignup} className="submit">Sign up</button>
        </div>

        <p style={{textAlign: "center"}}>Already have an account? <a href="#signin">Sign in</a></p>
      </form>
    </div>
  )
}

export default SignUp;