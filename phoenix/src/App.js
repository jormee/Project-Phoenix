import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import SidenavContextProvider from './contexts/sidenavContext';
import AuthContextProvider from './contexts/authContext';

import SignUp from './components/auth/signup';
import SignIn from './components/auth/signin';

const Nav = lazy(() => import('./components/nav/nav'))
const Home = lazy(() => import('./components/home/home'));
const Dashboard = lazy(() => import('./components/dashboard/dashboard'));
const Lesson = lazy(() => import('./components/lesson/lesson'));

function App() {
  return (
    <AuthContextProvider>
      <SidenavContextProvider>
        <Switch>
          <Suspense fallback={<h3>Please wait...</h3>}>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/:user_id/dashboard' component={Dashboard} />
            <Route path='/create-lesson' component={Lesson} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Suspense>
        </Switch>
      </SidenavContextProvider>
    </AuthContextProvider>
  );
}

export default App;
