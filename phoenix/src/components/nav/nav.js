import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import { SidenavContext } from '../../contexts/sidenavContext';
import { AuthContext } from '../../contexts/authContext';

import './nav.scss';

const Nav = () => {

  const { isLoggedIn } = useContext(AuthContext);
  const { isActive, toggleSidenav } = useContext(SidenavContext);
  
  return(
    <nav className="nav" data-state={isActive}>
      <div className="container">
        <h1 className="navBrand">Phoenix Classroom</h1>
        <ul className="navBar">
          <li><NavLink to="/" className="navItem">Home</NavLink></li>
          <li><NavLink to="/create-lesson" className="navItem">Lessons</NavLink></li>
          {
            isLoggedIn
            ? <h3>logged in</h3>
            : <a href="#signin">Log In</a>
          }
        </ul>

        {
          isActive && <button>X</button>
        }
      </div>
    </nav>
  )
}

export default Nav