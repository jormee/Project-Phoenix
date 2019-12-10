import React from 'react'
import { Link } from 'react-router-dom';

import navStyles from './nav.module.scss';

const Nav = () => {
  return(
    <nav className={navStyles.nav}>
      <div className={navStyles.container}>
        <h1 className={navStyles.navBrand}>Phoenix Classroom</h1>
        <ul className={navStyles.navBar}>
          <li className={navStyles.navItem}><Link to="/">Home</Link></li>
          <li className={navStyles.navItem}><Link to="/create-lesson">Lessons</Link></li>
          <li className={navStyles.navItem}><Link to="/">What we do</Link></li>
          <li className={navStyles.navItem}><Link to="#contact">Contacts</Link></li>
          {/* login/signup/avatar */}
          {/* <li className={navStyles.navItem}><Link to=""></Link></li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Nav