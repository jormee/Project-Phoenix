import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import navStyles from './nav.module.scss';
import { SidenavContext } from '../../contexts/sidenavContext';

const Nav = () => {

  const { isActive, toggleSidenav } = useContext(SidenavContext);
  
  return(
    <nav className={navStyles.nav} data-state={isActive}>
      <div className={navStyles.container}>
        <h1 className={navStyles.navBrand}>Phoenix Classroom</h1>
        <ul className={navStyles.navBar}>
          <li className={navStyles.navItem}><Link to="/">Home</Link></li>
          <li className={navStyles.navItem}><Link to="/create-lesson">Lessons</Link></li>
          <li className={navStyles.navItem}><Link to="#services">What we do</Link></li>
          <li className={navStyles.navItem}><Link to="#contact">Contacts</Link></li>
          {/* login/signup/avatar */}
          {/* <li className={navStyles.navItem}><Link to=""></Link></li> */}
        </ul>

        <button className={navStyles.sidenavToggle} onClick={toggleSidenav}>
        {
          isActive
          ? <span className="iconify" data-icon="bx:bx-x" data-inline="false"></span>
          : <span className="iconify" data-icon="dashicons:menu-alt" data-inline="false" ></span>
        }
        </button>
      </div>
    </nav>
  )
}

export default Nav