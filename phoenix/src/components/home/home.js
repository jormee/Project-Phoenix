import React from 'react';

import About from './about';
import Services from './services';
import Contact from './contact';
import SignIn from '../auth/signin';
import SignUp from '../auth/signup';

import homeStyles from './home.module.scss';

const Home = () => {
  return(
    <div className={homeStyles.container}>
      <SignIn />
      <SignUp />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default Home;