import React, { useState, createContext } from 'react';

export const SidenavContext = createContext();

const SidenavContextProvider = props => {

  const [isActive, setActive] = useState(false);

  const toggleSidenav = () => setActive(!isActive);

  return(
    <SidenavContext.Provider value={{ isActive, toggleSidenav }}>
      {props.children}
    </SidenavContext.Provider>
  )
}

export default SidenavContextProvider;