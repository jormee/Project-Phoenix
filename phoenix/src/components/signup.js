import React from 'react';

const SignUp = () => {

  return(
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}

export default SignUp;