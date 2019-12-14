import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {

  const [ isLoggedIn, setAuth ] = useState(false);

  const logout = () => {
    setAuth(false);
  }

  const login = () => {
    setAuth(true);
  }

  return(
    <AuthContext.Provider value={{isLoggedIn, logout, login}}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider;